import * as React from "react";
import { useSelector } from 'react-redux';
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
import * as firestore from "server/firestore.js"

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
import LoginScreen from './screens/LoginScreen.js';



import CreateEvent from './screens/CreateEvent.js'
import PersonalInfo from './screens/PersonalInfo.js';
import ProfileSettings from './screens/ProfileSettings.js';

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

// screenOptions={{ headerShown: false }}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false, gestureEnabled: false }}
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
            <Stack.Screen
              name="CreateEvent"
              component={CreateEvent}
              options={{ headerShown: false, gestureDirection: 'vertical'}}
            />
            <Stack.Screen
              name="PersonalInfo"
              component={PersonalInfo}
              options={{ headerShown: false, gestureDirection: 'vertical'}}
            />
            <Stack.Screen
              name="ProfileSettings"
              component={ProfileSettings}
              options={{ headerShown: false, gestureDirection: 'vertical'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

registerRootComponent(App);
