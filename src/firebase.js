// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyASHLj1VCl-Q1Nl8H-HYg5s8tx3SZyTYeI",
  authDomain: "t-haul.firebaseapp.com",
  projectId: "t-haul",
  storageBucket: "t-haul.appspot.com",
  messagingSenderId: "450036246610",
  appId: "1:450036246610:web:0131cfcabe21028f2d178b",
  measurementId: "G-4EPZ0WVG55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

export const db = getFirestore(app);