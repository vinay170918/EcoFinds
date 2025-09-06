// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb-6waMgiBLGoXGoWR6AAFIUOtkJs9Bak",
  authDomain: "hackthonvinay17.firebaseapp.com",
  projectId: "hackthonvinay17",
  storageBucket: "hackthonvinay17.appspot.com",   // ✅ FIXED: must be .appspot.com
  messagingSenderId: "454539822670",
  appId: "1:454539822670:web:8ac69bb1d9fc028184a51f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
