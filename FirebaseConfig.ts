// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjsgxL36WR0cf7R4sIJ4qwJ8sA16F0n2g",
  authDomain: "yusos-1e383.firebaseapp.com",
  projectId: "yusos-1e383",
  storageBucket: "yusos-1e383.appspot.com",
  messagingSenderId: "709697288899",
  appId: "1:709697288899:web:91a93f05666e17caedc076"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);