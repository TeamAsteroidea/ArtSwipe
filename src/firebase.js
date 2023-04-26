// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQO1N20Ngq8-HGqZiISrhjL-bF03czf7w",
  authDomain: "artswipe-b2bc3.firebaseapp.com",
  projectId: "artswipe-b2bc3",
  storageBucket: "artswipe-b2bc3.appspot.com",
  messagingSenderId: "298048017254",
  appId: "1:298048017254:web:afadfc7da1ad1e00722ea7",
  measurementId: "G-48R5S5D0J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };