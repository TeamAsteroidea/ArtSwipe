import { auth } from "../firebase";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import showNotificationPopup from "../components/showNotificationPopup";
import { loginUser, logoutUser, UserState } from "../reducers/userSlice";
// import AdsComponent from '../components/AdsComponent';
export default function Login() {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  // Get the 'loggedIn' state from the Redux store
  const loggedIn = useSelector(
    (state: { user: UserState }) => state.user.loggedIn
  );
  // Create Google and GitHub authentication providers
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  // Set up state variables for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Handle changes in the email and password inputs
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  // Handle the user signing in with email and password
  const handleSignIn = () => {
    // Try to sign in with the email and password entered
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // If successful, update the user's login state and display a success message
        const user = res.user;
        const loginData = {
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
          uid: user.uid,
          loggedIn: true,
        };
        showNotificationPopup(`Logged in as ${user.email}`, "#15d146");
        dispatch(loginUser(loginData));
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          // If the user doesn't exist, create a new account with the same email and password
          createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
              // If successful, update the user's login state and display a success message
              const user = res.user;
              const loginData = {
                displayName: user.displayName || "",
                email: user.email || "",
                photoURL: user.photoURL || "",
                uid: user.uid,
                loggedIn: true,
              };
              showNotificationPopup(`Logged in as ${user.email}`, "#15d146");
              dispatch(loginUser(loginData));
            })
            .catch((err) => {
              // If there's an error, display an error message
              alert(`${err.name}: ${err.message}`);
            });
        } else {
          // If there's an error, display an error message
          alert(`${err.name}: ${err.message}`);
        }
      });
  };
  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        // console.log(res);
        const loginData = {
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
          uid: user.uid,
          loggedIn: true,
        };
        showNotificationPopup(`Logged in as ${user.displayName}`, "#15d146");
        dispatch(loginUser(loginData));
      })
      .catch((err) => {
        alert(
          `${err.name}: ${err.code}. ${err.customData.email} already has an an account!`
        );
      });
  };
  const gitSignUp = () => {
    signInWithPopup(auth, gitProvider)
      .then((res) => {
        const user = res.user;
        // console.log(res);
        const loginData = {
          displayName: user.displayName || "",
          email: user.email || "",
          photoURL: user.photoURL || "",
          uid: user.uid,
          loggedIn: true,
        };
        showNotificationPopup(`Logged in as ${user.displayName}`, "#15d146");
        dispatch(loginUser(loginData));
      })
      .catch((err, ...rest) => {
        alert(
          `${err.name}: ${err.code}. ${err.customData.email} already has an an account!`
        );
      });
  };
  const logOut = () => {
    showNotificationPopup(`Logged out`, "#de395f");
    dispatch(logoutUser());
  };
  return (
    <div className="text-center">
      <div id="notification-popup"></div>
      {loggedIn !== undefined && !loggedIn && (
        <div id="logIn">
          <button type="button" id="git" className="signUp" onClick={gitSignUp}>
            Sign up with GitHub
            <span className="ml-2 fa-brands fa-github" />
          </button>
          <button
            type="button"
            id="google"
            className="signUp"
            onClick={googleSignUp}
          >
            Sign up with Google
            <span className="ml-2 fa-brands fa-google" />
          </button>
          <div
            id="email-sign-in"
            className="bg-[#476f9d] p-4 rounded-lg mx-[30vw]"
          >
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="border rounded-lg p-2 mb-2"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="border rounded-lg p-2"
              />
            </div>
            <button
              type="button"
              className="bg-[#2e3687] hover:bg-[#3a439c] text-white mt-2 px-4 py-2 rounded-md"
              onClick={handleSignIn}
            >
              Sign in with email
            </button>
          </div>
        </div>
      )}
      {loggedIn !== undefined && loggedIn && (
        <div id="logIn">
          <button type="button" id="logOut" className="signUp" onClick={logOut}>
            Log Out
          </button>
        </div>
      )}
      {/* <>
        <h1>Place To show Google AdSense</h1>
        <AdsComponent dataAdSlot='X7XXXXXX5X' />
      </> */}
    </div>
  );
}
