
import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  projectId: "solutiontemple",
  appId: "1:131667982782:web:641885dd655f957c77a1ef",
  storageBucket: "solutiontemple.firebasestorage.app",
  apiKey: "AIzaSyCaN5t3MiNKlCb90Uz8a0XgueMZks_JGB0",
  authDomain: "solutiontemple.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "131667982782"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
