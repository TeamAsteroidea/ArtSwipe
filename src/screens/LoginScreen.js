import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Platform,
} from "react-native";
import {
  // GoogleAuthProvider,
  // GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // signInWithPopup,
} from 'firebase/auth';
import * as React from "react";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { auth } from "../server/firestore";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../redux/userReducer.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BGDARK } from '../constants/Colors.js';
import Logo from '../../assets/artswipe-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#232323",
  },
  inputContainer: {
    backgroundColor: "#D9D9D9",
    fontSize: 16,
    width: 275,
    height: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  lowerButtons: {
    backgroundColor: "#034448",
    width: 125,
    height: 30,
    borderRadius: 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 50,
  }
})

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    async function fetchData() {
      if (Platform.OS === 'web') {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
          passToDispatch(JSON.parse(savedUser));
        }
      } else {
        const savedUser = await AsyncStorage.getItem('currentUser');
        if (savedUser) {
          // console.log('useEffect ', JSON.parse(savedUser))
          passToDispatch(JSON.parse(savedUser));
        }
      }
    }
    fetchData();
  }, [loggedIn]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        if (Platform.OS === 'web') {
          localStorage.setItem('currentUser', JSON.stringify({user: res.user, _tokenResponse: res._tokenResponse.idToken}));
        } else {
          await AsyncStorage.setItem('currentUser', JSON.stringify({user: res.user, _tokenResponse: res._tokenResponse.idToken}));
        }
        passToDispatch(res)
        enter();
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
      });
  }

  const handleSignIn = () => {
    // Try to sign in with the email and password entered
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        if (Platform.OS === 'web') {
          localStorage.setItem('currentUser', JSON.stringify({user: res.user, _tokenResponse: res._tokenResponse.idToken}));
        } else {
          // console.log('handleSignIn ', JSON.parse(JSON.stringify({user: res.user, _tokenResponse: res._tokenResponse.idToken})))
          await AsyncStorage.setItem('currentUser', JSON.stringify({user: res.user, _tokenResponse: res._tokenResponse.idToken}));
        }
        passToDispatch(res)
        enter();
      })
      .catch((err) => {
        alert(`${err.name}: ${err.message}`);
      });
  }

  // just added this for dryness, it's the same content that was originally in handleSignIn
  const passToDispatch = (res) => {
    // console.log('passToDispatch ', res)
    const user = res.user;
    // If successful, update the user's login state and display a success message
    const loginData = { displayName: user.displayName || '', email: user.email || '', photoURL: user.photoURL || '', uid: user.uid, loggedIn: true, idToken: res._tokenResponse.idToken };
    // showNotificationPopup(`Logged in as ${user.email}`, '#15d146');
    dispatch(loginUser(loginData));
  }

  const logOut = async () => {
    if (Platform.OS === 'web') {
      localStorage.removeItem('currentUser');
    } else {
      await AsyncStorage.removeItem('currentUser');
    }
    dispatch(logoutUser());
  }

  const enter = () => { navigation.navigate('Home'); }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >

      <View>
        <Image
          source={ Logo }
          style={ styles.logo }/>
      </View>

      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputContainer}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputContainer}
          secureTextEntry
        />
      </View>

      <View style={{marginTop: 40}}>
        {loggedIn ? (
          <>
            <TouchableOpacity
              onPress={logOut}
              style={styles.lowerButtons}
              // value={}
              // onChangeText={}
              secureTextEntry
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={enter}
              style={styles.lowerButtons}
              // value={ }
              // onChangeText={ }
              secureTextEntry
            >
              <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={handleSignIn}
              style={styles.lowerButtons}
            // value={}
            // onChangeText={}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUp}
              style={styles.lowerButtons}
              // value={}
              // onChangeText={}
              secureTextEntry
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </>
        )
        }
      </View>

    </KeyboardAvoidingView >
  )

}
LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;