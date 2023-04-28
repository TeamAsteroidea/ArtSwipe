// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { API_KEY, APP_ID } from "@env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "artswipe-b2bc3.firebaseapp.com",
  databaseURL: "https://artswipe-b2bc3.firebaseio.com/",
  projectId: "artswipe-b2bc3",
  storageBucket: "artswipe-b2bc3.appspot.com",
  messagingSenderId: "sender-id",
  appId: APP_ID,
  measurementId: "G-48R5S5D0J1",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
