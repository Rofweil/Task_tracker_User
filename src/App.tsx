import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { AuthModal } from './components/AuthModal';
import { Dashboard } from './components/Dashboard';
import { InfoSection } from './components/InfoSection';
import { TicketIcon, HelpCircle, CheckCircle, Book, LogIn } from 'lucide-react';

export default function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  // If user is signed in, show the dashboard
  if (user) {
    return <Dashboard />;
  }

  // Otherwise, show the landing page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TicketIcon className="w-8 h-8 text-indigo-600" />
            <span className="text-indigo-900">IT Support Ticketing System</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleAuthClick('signin')}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
            <button
              onClick={() => handleAuthClick('signup')}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-indigo-900 mb-4">
          Get IT Support When You Need It
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Submit tickets, track progress, and resolve technical issues efficiently. Our IT team is here to help you get back to work quickly.
        </p>
        <button
          onClick={() => handleAuthClick('signup')}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Get Started
        </button>
      </section>

      {/* Information Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <InfoSection
          icon={<HelpCircle className="w-8 h-8 text-indigo-600" />}
          title="When to Use the System"
          content={
            <ul className="space-y-2 text-gray-600">
              <li>• Hardware malfunctions (computer, monitor, keyboard, etc.)</li>
              <li>• Software installation or troubleshooting</li>
              <li>• Network connectivity issues</li>
              <li>• Password resets and account access</li>
              <li>• Email or application errors</li>
              <li>• New equipment or software requests</li>
            </ul>
          }
        />

        <InfoSection
          icon={<TicketIcon className="w-8 h-8 text-indigo-600" />}
          title="How to Submit a Good Ticket"
          content={
            <ul className="space-y-2 text-gray-600">
              <li>• Provide a clear, descriptive title</li>
              <li>• Include specific error messages (screenshots help!)</li>
              <li>• Describe what you were doing when the issue occurred</li>
              <li>• Mention steps you've already tried</li>
              <li>• Specify urgency and impact on your work</li>
              <li>• Include your location and contact information</li>
            </ul>
          }
        />

        <InfoSection
          icon={<CheckCircle className="w-8 h-8 text-indigo-600" />}
          title="What Happens Next"
          content={
            <div className="space-y-3 text-gray-600">
              <div>
                <span className="text-indigo-600">Step 1:</span> Your ticket is automatically logged and assigned a unique ID
              </div>
              <div>
                <span className="text-indigo-600">Step 2:</span> You'll receive a confirmation email with your ticket number
              </div>
              <div>
                <span className="text-indigo-600">Step 3:</span> An IT technician will review and prioritize your request
              </div>
              <div>
                <span className="text-indigo-600">Step 4:</span> You'll be notified of any updates or resolution
              </div>
            </div>
          }
        />

        <InfoSection
          icon={<Book className="w-8 h-8 text-indigo-600" />}
          title="Self-Service/Knowledge Base"
          content={
            <div className="text-gray-600 space-y-3">
              <p>
                Before submitting a ticket, check our knowledge base for quick solutions to common issues:
              </p>
              <ul className="space-y-2">
                <li>• Password reset guides</li>
                <li>• VPN connection setup</li>
                <li>• Printer configuration</li>
                <li>• Email setup on mobile devices</li>
                <li>• Software installation tutorials</li>
              </ul>
              <button
                onClick={() => handleAuthClick('signin')}
                className="mt-2 text-indigo-600 hover:text-indigo-700 underline"
              >
                Browse Knowledge Base →
              </button>
            </div>
          }
        />
      </section>

      {/* Footer */}
      <footer className="bg-white mt-16 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>Need immediate assistance? Call us: Adly: 011-6911 0701 / Eizzat: 012-861 7490</p>
          <p className="mt-2">Available Monday - Friday: 8:30 AM - 5:30 PM & Saturday: 8:30 AM - 1:00 PM</p>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
        />
      )}
    </div>
  );
}
