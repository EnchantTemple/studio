// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "solutiontemple",
  appId: "1:131667982782:web:641885dd655f957c77a1ef",
  storageBucket: "solutiontemple.firebasestorage.app",
  apiKey: "AIzaSyCaN5t3MiNKlCb90Uz8a0XgueMZks_JGB0",
  authDomain: "solutiontemple.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "131667982782",
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
