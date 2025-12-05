import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
import { database, auth } from '../config/firebase';

interface Notification {
  ticketId: string;
  ticketTitle: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface NotificationBellProps {
  onNotificationClick: (ticketId: string) => void;
}

export function NotificationBell({ onNotificationClick }: NotificationBellProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    // Listen to all tickets and filter client-side
    const ticketsRef = ref(database, 'tickets');

    const unsubscribe = onValue(ticketsRef, (snapshot) => {
      const notificationsList: Notification[] = [];
      const data = snapshot.val();

      console.log('NotificationBell - Current user:', user.uid);
      console.log('NotificationBell - All tickets:', data);

      if (data) {
        Object.entries(data).forEach(([ticketId, ticket]: [string, any]) => {
          console.log(`Checking ticket ${ticketId}:`, {
            createdByUid: ticket.createdBy?.uid,
            currentUserUid: user.uid,
            matches: ticket.createdBy?.uid === user.uid,
            messages: ticket.messages
          });

          // Only process tickets created by current user
          if (ticket.createdBy?.uid !== user.uid) return;

          // Check if there are messages from IT staff
          if (ticket.messages) {
            Object.entries(ticket.messages).forEach(([messageId, message]: [string, any]) => {
              console.log(`Message ${messageId}:`, message);
              if (message.sentBy?.role === 'IT Staff') {
                console.log('Found IT Staff message!', message);
                notificationsList.push({
                  ticketId: ticketId,
                  ticketTitle: ticket.title,
                  message: message.text,
                  timestamp: message.sentAt,
                  read: message.read || false,
                });
              }
            });
          }

          // Check if status changed to in_progress or resolved
          if (ticket.status === 'in_progress' || ticket.status === 'resolved') {
            const statusMessage = ticket.status === 'in_progress' 
              ? 'Your ticket is being worked on' 
              : 'Your ticket has been resolved';
            
            notificationsList.push({
              ticketId: ticketId,
              ticketTitle: ticket.title,
              message: statusMessage,
              timestamp: ticket.updatedAt,
              read: false,
            });
          }
        });
      }

      // Sort by timestamp (newest first)
      notificationsList.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      console.log('Final notifications list:', notificationsList);
      console.log('Unread count:', notificationsList.filter(n => !n.read).length);

      setNotifications(notificationsList);
      setUnreadCount(notificationsList.filter(n => !n.read).length);
    });

    return () => unsubscribe();
  }, []);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-96 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-gray-900">Notifications</h3>
              {unreadCount > 0 && (
                <p className="text-gray-600">{unreadCount} unread</p>
              )}
            </div>

            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications yet
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {notifications.map((notification, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onNotificationClick(notification.ticketId);
                      setShowDropdown(false);
                    }}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 truncate">
                          {notification.ticketTitle}
                        </p>
                        <p className="text-gray-600 line-clamp-2 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-gray-500 mt-1">
                          {formatTimestamp(notification.timestamp)}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}