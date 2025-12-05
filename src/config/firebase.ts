import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA5d1rWrn9C9x5slkvkLQXW29JiMXoMSeg",
  authDomain: "tasktracker-e2329.firebaseapp.com",
  projectId: "tasktracker-e2329",
  storageBucket: "tasktracker-e2329.firebasestorage.app",
  messagingSenderId: "1044567656792",
  appId: "1:1044567656792:web:58a8e5f942f1ac66213d2d",
  measurementId: "G-VNRBNZ4R28",
  databaseURL: "https://tasktracker-e2329-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;