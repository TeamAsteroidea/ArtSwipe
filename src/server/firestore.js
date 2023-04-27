// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// console.log(process.env.API_KEY)
const firebaseConfig = {
  apiKey: "AIzaSyDQO1N20Ngq8-HGqZiISrhjL-bF03czf7w",
  authDomain: "artswipe-b2bc3.firebaseapp.com",
  databaseURL: "https://artswipe-b2bc3.firebaseio.com/",
  projectId: "artswipe-b2bc3",
  storageBucket: "artswipe-b2bc3.appspot.com",
  messagingSenderId: "sender-id",
  appId: "1:298048017254:web:afadfc7da1ad1e00722ea7",
  measurementId: "G-48R5S5D0J1",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
// createUserWithEmailAndPassword(auth, 'dummymail@yeet.com', 'dummypw').then(() => {
//   console.log('how did I make it here')
// })
