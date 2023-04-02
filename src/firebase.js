// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCP_5sIWBRFtCwOKXLVbL5p3awfCwrXmC4",
  authDomain: "artiflex-4c98f.firebaseapp.com",
  projectId: "artiflex-4c98f",
  storageBucket: "artiflex-4c98f.appspot.com",
  messagingSenderId: "1076009398012",
  appId: "1:1076009398012:web:11c9863fe75b21eadd7179",
  measurementId: "G-L5SBT60S99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
