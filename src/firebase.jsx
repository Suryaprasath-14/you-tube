// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore, serverTimestamp} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS5X8zbskTL1zmDaUhQ_IBmWHe6vwjlwg",
  authDomain: "yt-clone-1c60d.firebaseapp.com",
  projectId: "yt-clone-1c60d",
  storageBucket: "yt-clone-1c60d.appspot.com",
  messagingSenderId: "991894865419",
  appId: "1:991894865419:web:fae3911aaebbeda924a90e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export {app, db, auth, timestamp, provider}