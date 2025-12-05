import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { auth, database } from '../config/firebase';
import { TicketForm } from './TicketForm';
import { NotificationBell } from './NotificationBell';
import { TicketDetail } from './TicketDetail';
import { MyTickets } from './MyTickets';
import { TicketIcon, LogOut, User } from 'lucide-react';

interface UserData {
  name: string;
  email: string;
  department: string;
}

export function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    // Fetch user data from database
    const userRef = ref(database, 'users/' + user.uid);
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData({
          name: data.name,
          email: data.email,
          department: data.department,
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNotificationClick = (ticketId: string) => {
    setSelectedTicketId(ticketId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Unable to load user data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TicketIcon className="w-8 h-8 text-indigo-600" />
            <span className="text-indigo-900">IT Support Ticketing System</span>
          </div>
          <div className="flex items-center gap-4">
            <NotificationBell onNotificationClick={handleNotificationClick} />
            <div className="flex items-center gap-2 text-gray-700">
              <User className="w-5 h-5" />
              <span>{userData.name}</span>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-red-600 hover:text-red-700 transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <TicketForm userData={userData} />
          </div>
          <div>
            <MyTickets onTicketClick={setSelectedTicketId} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>Need immediate assistance? Call us: Adly: 011-6911 0701 / Eizzat: 012-861 7490</p>
          <p className="mt-2">Available Monday - Friday: 8:30 AM - 5:30 PM & Saturday: 8:30 AM - 1:00 PM</p>
        </div>
      </footer>

      {/* Ticket Detail Modal */}
      {selectedTicketId && (
        <TicketDetail
          ticketId={selectedTicketId}
          onClose={() => setSelectedTicketId(null)}
        />
      )}
    </div>
  );
}