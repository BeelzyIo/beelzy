import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAa3Q7JC6ttiKqiefxIHxDw0OdKjkiNacU",
  authDomain: "beelzy-c4241.firebaseapp.com",
  projectId: "beelzy-c4241",
  storageBucket: "beelzy-c4241.firebasestorage.app",
  messagingSenderId: "1029347502934",
  appId: "1:1029347502934:web:b7f41f00d942e1ca27c4f7",
  measurementId: "G-TGLZDCZL3T"
};

const app = initializeApp(firebaseConfig);

// Auth exports
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

/* Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;*/