import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database, auth } from '../config/firebase';
import { Clock, MessageCircle, FileText } from 'lucide-react';

interface Ticket {
  ticketId: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  messages?: { [key: string]: any };
}

interface MyTicketsProps {
  onTicketClick: (ticketId: string) => void;
}

export function MyTickets({ onTicketClick }: MyTicketsProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const ticketsRef = ref(database, 'tickets');
    const unsubscribe = onValue(ticketsRef, (snapshot) => {
      const data = snapshot.val();
      const userTickets: Ticket[] = [];

      if (data) {
        Object.entries(data).forEach(([ticketId, ticket]: [string, any]) => {
          if (ticket.createdBy?.uid === user.uid) {
            userTickets.push({
              ticketId,
              ...ticket,
            });
          }
        });
      }

      // Sort by updatedAt (most recent first)
      userTickets.sort((a, b) => 
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );

      setTickets(userTickets);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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

  const getMessageCount = (ticket: Ticket) => {
    if (!ticket.messages) return 0;
    return Object.keys(ticket.messages).length;
  };

  const hasUnreadMessages = (ticket: Ticket) => {
    if (!ticket.messages) return false;
    return Object.values(ticket.messages).some(
      (msg: any) => msg.sentBy?.role === 'IT Staff' && !msg.read
    );
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-600">Loading your tickets...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-indigo-600" />
        <h2 className="text-gray-900">My Tickets</h2>
      </div>

      {tickets.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p>You haven&apos;t submitted any tickets yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <button
              key={ticket.ticketId}
              onClick={() => onTicketClick(ticket.ticketId)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors relative"
            >
              {hasUnreadMessages(ticket) && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full" />
              )}
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-900 pr-4">{ticket.title}</h3>
                <div className="flex gap-2 flex-shrink-0">
                  <span className={`px-2 py-1 rounded-full border text-sm ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full border text-sm ${getStatusColor(ticket.status)}`}>
                    {getStatusLabel(ticket.status)}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 line-clamp-2 mb-3">{ticket.description}</p>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-4 text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatTimestamp(ticket.createdAt)}
                  </span>
                  {getMessageCount(ticket) > 0 && (
                    <span className="flex items-center gap-1 text-indigo-600">
                      <MessageCircle className="w-4 h-4" />
                      {getMessageCount(ticket)} {getMessageCount(ticket) === 1 ? 'message' : 'messages'}
                    </span>
                  )}
                </div>
                <span className="text-gray-400">{ticket.category}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
