import { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database, auth, storage } from '../config/firebase';
import { Loader2, Upload, X } from 'lucide-react';

interface TicketFormProps {
  userData: {
    name: string;
    email: string;
    department: string;
  };
}

export function TicketForm({ userData }: TicketFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('medium');
  const [location, setLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Validate file sizes
    const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);
    
    if (invalidFiles.length > 0) {
      setError(`Some files exceed the 50MB limit: ${invalidFiles.map(f => f.name).join(', ')}`);
      return;
    }

    setAttachments(prev => [...prev, ...files]);
    setError('');
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('User not authenticated');
      }

      // Upload attachments to Firebase Storage in parallel
      const attachmentUrls: Array<{ name: string; url: string; size: number }> = [];
      
      if (attachments.length > 0) {
        const uploadPromises = attachments.map(async (file) => {
          const timestamp = Date.now();
          const fileName = `tickets/${user.uid}/${timestamp}_${file.name}`;
          const fileRef = storageRef(storage, fileName);
          
          await uploadBytes(fileRef, file);
          const downloadUrl = await getDownloadURL(fileRef);
          
          return {
            name: file.name,
            url: downloadUrl,
            size: file.size,
          };
        });

        // Wait for all uploads to complete in parallel
        const uploadedFiles = await Promise.all(uploadPromises);
        attachmentUrls.push(...uploadedFiles);
      }

      // Create a new ticket in the database
      const ticketsRef = ref(database, 'tickets');
      const newTicketRef = push(ticketsRef);
      
      const ticketData = {
        ticketId: newTicketRef.key,
        title,
        description,
        category,
        priority,
        location,
        contactNumber,
        attachments: attachmentUrls,
        status: 'open',
        createdBy: {
          uid: user.uid,
          name: userData.name,
          email: userData.email,
          department: userData.department,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await set(newTicketRef, ticketData);

      setSuccess(true);
      
      // Reset form
      setTitle('');
      setDescription('');
      setCategory('');
      setPriority('medium');
      setLocation('');
      setContactNumber('');
      setAttachments([]);

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);

    } catch (err: any) {
      console.error('Error creating ticket:', err);
      
      // Provide specific error messages
      if (err.code === 'storage/retry-limit-exceeded') {
        setError('File upload failed. Please ensure Firebase Storage is enabled in your Firebase Console.');
      } else if (err.code === 'storage/unauthorized') {
        setError('Upload permission denied. Please check Firebase Storage security rules.');
      } else if (err.code === 'storage/canceled') {
        setError('Upload was cancelled.');
      } else if (err.code === 'storage/quota-exceeded') {
        setError('Storage quota exceeded. Please contact administrator.');
      } else {
        setError('Failed to submit ticket. Please try again or submit without attachments.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-gray-900 mb-2">Submit a Support Ticket</h2>
        <p className="text-gray-600 mb-6">
          Please provide detailed information about your issue so we can assist you quickly.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
            ✓ Ticket submitted successfully! Our IT team will review it shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Ticket Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 mb-2">
              Issue Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Brief description of the issue"
              required
              disabled={loading}
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              disabled={loading}
            >
              <option value="">Select a category</option>
              <option value="hardware">Hardware Issue</option>
              <option value="software">Software Issue</option>
              <option value="network">Network/Connectivity</option>
              <option value="email">Email Issue</option>
              <option value="password">Password/Account Access</option>
              <option value="printer">Printer Issue</option>
              <option value="phone">Phone System</option>
              <option value="request">New Equipment/Software Request</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-gray-700 mb-2">
              Priority <span className="text-red-500">*</span>
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              disabled={loading}
            >
              <option value="low">Low - Minor inconvenience</option>
              <option value="medium">Medium - Affecting my work</option>
              <option value="high">High - Cannot work</option>
              <option value="urgent">Urgent - Critical business impact</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 mb-2">
              Detailed Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]"
              placeholder="Please describe the issue in detail. Include:&#10;- What were you doing when the issue occurred?&#10;- Any error messages you received&#10;- Steps you've already tried&#10;- When the issue started"
              required
              disabled={loading}
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Building/Floor/Room number"
              required
              disabled={loading}
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block text-gray-700 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your phone number"
              required
              disabled={loading}
            />
          </div>

          {/* File Attachments */}
          <div>
            <label htmlFor="attachments" className="block text-gray-700 mb-2">
              Attachments (Optional)
            </label>
            <p className="text-gray-600 mb-2">Maximum file size: 50MB per file</p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors">
              <input
                type="file"
                id="attachments"
                onChange={handleFileChange}
                className="hidden"
                multiple
                disabled={loading}
              />
              <label
                htmlFor="attachments"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="w-8 h-8 text-gray-400" />
                <span className="text-gray-600">
                  Click to upload files or drag and drop
                </span>
                <span className="text-gray-500">Screenshots, documents, images</span>
              </label>
            </div>

            {/* Display attached files */}
            {attachments.length > 0 && (
              <div className="mt-3 space-y-2">
                {attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Upload className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700 truncate">{file.name}</span>
                      <span className="text-gray-500 flex-shrink-0">
                        ({formatFileSize(file.size)})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="ml-2 text-red-500 hover:text-red-700 flex-shrink-0"
                      disabled={loading}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User Info Display */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-gray-700 mb-1">Submitting as:</p>
            <p className="text-gray-900">{userData.name}</p>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-600">Department: {userData.department}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            {loading ? 'Submitting...' : 'Submit Ticket'}
          </button>
        </form>
      </div>
    </div>
  );
}