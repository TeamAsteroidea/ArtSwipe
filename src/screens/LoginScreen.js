import * as React from "react";
import { useRef, useState } from "react";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";

import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { loginUser, logoutUser, UserState } from "../redux/userReducer.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const LoginScreen = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // If successful, update the user's login state and display a success message
        const user = res.user;
        const loginData = { displayName: user.displayName || '', email: user.email || '', photoURL: user.photoURL || '', uid: user.uid, loggedIn: true };
        // showNotificationPopup(`Logged in as ${user.email}`, '#15d146');
        dispatch(loginUser(loginData));
      })
      .catch((err) => {
        // If there's an error, display an error message
        alert(`${err.name}: ${err.message}`);
      });
  }

  const handleSignIn = () => {
    // Try to sign in with the email and password entered
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // If successful, update the user's login state and display a success message
        const user = res.user;
        const loginData = { displayName: user.displayName || '', email: user.email || '', photoURL: user.photoURL || '', uid: user.uid, loggedIn: true };
        // showNotificationPopup(`Logged in as ${user.email}`, '#15d146');
        dispatch(loginUser(loginData));
      })
      .catch((err) => {
          alert(`${err.name}: ${err.message}`);
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View>
        <Text>Login Screen</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={handleSignIn}
          // value={}
          // onChangeText={}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> {handleSignUp}}
          // value={}
          // onChangeText={}
          secureTextEntry
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )

}

export default LoginScreen;