import { useState, useEffect, useRef } from 'react';
import { ref, onValue, update } from 'firebase/database';
import { database, auth } from '../config/firebase';
import { X, Send, Loader2, Clock, AlertCircle } from 'lucide-react';

interface Message {
  sentBy: {
    uid: string;
    displayName?: string;
    email: string;
    role: string;
  };
  text: string;
  sentAt: string;
  emailSent?: boolean;
}

interface Ticket {
  ticketId: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  location: string;
  contactNumber: string;
  status: string;
  createdBy: {
    uid: string;
    name: string;
    email: string;
    department: string;
  };
  createdAt: string;
  updatedAt: string;
  messages?: { [key: string]: Message };
  attachments?: Array<{ name: string; url: string; size: number }>;
}

interface TicketDetailProps {
  ticketId: string;
  onClose: () => void;
}

export function TicketDetail({ ticketId, onClose }: TicketDetailProps) {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ticketId) return;

    const ticketRef = ref(database, `tickets/${ticketId}`);
    const unsubscribe = onValue(ticketRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTicket(data as Ticket);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [ticketId]);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ticket?.messages]);

  const handleSendReply = async () => {
    if (!replyMessage.trim() || !ticket) return;

    setSending(true);
    try {
      const user = auth.currentUser;
      if (!user) return;

      const timestamp = Date.now();
      const newMessage: Message = {
        sentBy: {
          uid: user.uid,
          email: ticket.createdBy.email,
          displayName: ticket.createdBy.name,
          role: 'user',
        },
        text: replyMessage,
        sentAt: new Date().toISOString(),
        emailSent: false,
      };

      const ticketRef = ref(database, `tickets/${ticketId}`);
      
      await update(ticketRef, {
        [`messages/${timestamp}`]: newMessage,
        lastMessage: {
          text: replyMessage,
          sentAt: new Date().toISOString(),
          sentBy: {
            uid: user.uid,
            email: ticket.createdBy.email,
            displayName: ticket.createdBy.name,
            role: 'user',
          },
          emailSent: false,
        },
        updatedAt: new Date().toISOString(),
      });

      setReplyMessage('');
    } catch (error) {
      console.error('Error sending reply:', error);
      alert('Failed to send reply. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'high':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'in_progress':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'resolved':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'closed':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in_progress':
        return 'In Progress';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        </div>
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600">Ticket not found</p>
        </div>
      </div>
    );
  }

  // Convert messages object to array and sort by timestamp
  const messagesArray = ticket.messages 
    ? Object.entries(ticket.messages)
        .map(([id, msg]) => ({ id, ...msg }))
        .sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime())
    : [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-start flex-shrink-0">
          <div className="flex-1">
            <h2 className="text-gray-900 mb-2">{ticket.title}</h2>
            <div className="flex gap-2 flex-wrap">
              <span className={`px-3 py-1 rounded-full border ${getPriorityColor(ticket.priority)}`}>
                {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
              </span>
              <span className={`px-3 py-1 rounded-full border ${getStatusColor(ticket.status)}`}>
                {getStatusLabel(ticket.status)}
              </span>
              <span className="px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600">
                {ticket.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 ml-4"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Ticket Details */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Created by</p>
                <p className="text-gray-900">{ticket.createdBy.name}</p>
                <p className="text-gray-600">{ticket.createdBy.email}</p>
              </div>
              <div>
                <p className="text-gray-600">Department</p>
                <p className="text-gray-900">{ticket.createdBy.department}</p>
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="text-gray-900">{ticket.location}</p>
              </div>
              <div>
                <p className="text-gray-600">Contact</p>
                <p className="text-gray-900">{ticket.contactNumber}</p>
              </div>
              <div>
                <p className="text-gray-600">Created</p>
                <p className="text-gray-900 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {formatTimestamp(ticket.createdAt)}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 mb-2">Description</p>
              <p className="text-gray-900 whitespace-pre-wrap">{ticket.description}</p>
            </div>

            {ticket.attachments && ticket.attachments.length > 0 && (
              <div className="mt-4">
                <p className="text-gray-600 mb-2">Attachments</p>
                <div className="space-y-2">
                  {ticket.attachments.map((file, index) => (
                    <a
                      key={index}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 bg-white rounded border border-gray-200 hover:bg-gray-50 text-indigo-600"
                    >
                      {file.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Conversation */}
          <div className="p-6 space-y-4 min-h-[200px]">
            {messagesArray.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <AlertCircle className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p>No replies yet. Our IT team will respond soon.</p>
              </div>
            ) : (
              <>
                {messagesArray.map((message) => {
                  const isStaff = message.sentBy.role === 'IT Staff';
                  return (
                    <div
                      key={message.id}
                      className={`flex ${isStaff ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-4 ${
                          isStaff
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-indigo-600 text-white'
                        }`}
                      >
                        <p className={`mb-1 ${isStaff ? 'text-gray-600' : 'text-indigo-200'}`}>
                          {message.sentBy.displayName || message.sentBy.email}
                          {isStaff && ' (IT Staff)'}
                        </p>
                        <p className="whitespace-pre-wrap">{message.text}</p>
                        <p
                          className={`mt-2 ${
                            isStaff ? 'text-gray-500' : 'text-indigo-200'
                          }`}
                        >
                          {formatTimestamp(message.sentAt)}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        </div>

        {/* Reply Input - Fixed at bottom */}
        <div className="p-6 border-t border-gray-200 bg-white flex-shrink-0">
          <div className="flex gap-2">
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your reply..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              rows={3}
              disabled={sending}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendReply();
                }
              }}
            />
            <button
              onClick={handleSendReply}
              disabled={!replyMessage.trim() || sending}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {sending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
        </div>
      </div>
    </div>
  );
}