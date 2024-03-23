// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAv6VlL1vhv0llthad5xfK_rOioYbJtzX8",
  authDomain: "netflix-clone-ef25b.firebaseapp.com",
  databaseURL: "https://netflix-clone-ef25b.firebaseio.com",
  projectId: "netflix-clone-ef25b",
  storageBucket: "netflix-clone-ef25b.appspot.com",
  messagingSenderId: "481527972086",
  appId: "1:481527972086:web:cbea243d6fd713a51f2cd7",
  measurementId: "G-ZGQ22900E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);