import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Added for database
import { getStorage } from "firebase/storage";     // Added for images

const firebaseConfig = {
  apiKey: "AIzaSyDLLeevMjnTS_TmV4fcRJRFiNdge33Swxo",
  authDomain: "act-4-b1215.firebaseapp.com",
  projectId: "act-4-b1215",
  storageBucket: "act-4-b1215.firebasestorage.app",
  messagingSenderId: "462585476849",
  appId: "1:462585476849:web:17f22195e50ae2f5a65b50",
  measurementId: "G-HQN102QJX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Database and Storage, and export them
export const db = getFirestore(app);
export const storage = getStorage(app);