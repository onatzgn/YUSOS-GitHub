// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from 'firebase/firestore'; // setDoc ve doc işlevlerini içe aktardık

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJvRTahIcO9Z3eCtoHY_McfF42_jzRrY",
  authDomain: "yusos-edd9b.firebaseapp.com",
  projectId: "yusos-edd9b",
  storageBucket: "yusos-edd9b.appspot.com",
  messagingSenderId: "871601849319",
  appId: "1:871601849319:web:2c19a0d44c092c25f3b342"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
