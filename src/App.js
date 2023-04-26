import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  // StyleSheet,
  // Button,
  // View,
  SafeAreaView,
  // Text,
  // Alert,
} from "react-native";
// yo just a heads up it's like two lines to change if we do need to swap out the bottom tabs for tops or vice versa
import registerRootComponent from "expo/build/launch/registerRootComponent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "constants/Colors.js";
import StackScreenOptions from "components/modular/StackScreenOptions.jsx";

/*~~~~TABS GO HERE~~~~*/
import ArtistAlley from "./tabs/ArtistAlley.js";
import Events from "./tabs/Events.js";
import Messages from "./tabs/Messages.jsx";
import Profile from "./tabs/Profile.js";
import SwipeStack from "./tabs/SwipeStack.js";

/*~~~~SCREENS GO HERE~~~~*/
import ArtistPage from "./screens/ArtistPage.js";
import DetailView from "./screens/DetailView.js";
import ChatPage from "./screens/ChatPage.jsx";
import BiddingHistory from './screens/BiddingHistory.js';
import Bookmarks from './screens/Bookmarks.js';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDWBSu8t-d4dX-5ZQRdJbQRy7Fv4FDusL4',
  authDomain: 'artswipe-b2bc3.firebaseapp.com',
  databaseURL: 'https://artswipe-b2bc3.firebaseio.com/',
  projectId: 'artswipe-b2bc3',
  storageBucket: 'artswipe-b2bc3.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:298048017254:ios:f3ff0ff40bd9f487722ea7',
  measurementId: 'G-measurement-id',
};

const fbase = initializeApp(firebaseConfig);
console.log(typeof fbase)
const auth = getAuth(fbase);
console.log(auth)
createUserWithEmailAndPassword(auth, 'dummymail@test.com', 'dummypw').then(() => {
  console.log('how did I make it here')
})

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: Colors.PRIMARY,
          paddingTop: 10,
          shadowRadius: 15,
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        key={1}
        name="Events"
        component={Events}
        options={StackScreenOptions("calendar", 40)}
      />

      <Tab.Screen
        key={2}
        name="ArtistAlley"
        component={ArtistAlley}
        options={StackScreenOptions("store", 35)}
      />
      <Tab.Screen
        key={3}
        name="SwipeStack"
        component={SwipeStack}
        options={StackScreenOptions("gavel", 42)}
      />
      <Tab.Screen
        key={4}
        name="Messages"
        component={Messages}
        options={StackScreenOptions("comment", 42)}
      />
      <Tab.Screen
        key={5}
        name="Profile"
        component={Profile}
        options={StackScreenOptions("user-circle", 44, "solid")}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArtistPage"
            component={ArtistPage}
            options={{ headerShown: false, gestureDirection: "vertical" }}
          />
          <Stack.Screen
            name="DetailView"
            component={DetailView}
            options={{ headerShown: false, gestureDirection: "vertical" }}
          />
          <Stack.Screen
            name="ChatPage"
            component={ChatPage}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
              name="BiddingHistory"
              component={BiddingHistory}
              options={{ headerShown: false, gestureDirection: 'vertical'}}
            />
            <Stack.Screen
              name="Bookmarks"
              component={Bookmarks}
              options={{ headerShown: false, gestureDirection: 'vertical'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

registerRootComponent(App);
