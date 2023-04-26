import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
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

/*~~~~TABS GO HERE~~~~*/
// import ArtistAlley from "./tabs/ArtistAlley.js";
import Events from "./tabs/Events.js";
import Messages from "./tabs/Messages.js";
import Profile from "./tabs/Profile.js";
import SwipeStack from "./tabs/SwipeStack.js";

/*~~~~SCREENS GO HERE~~~~*/
import ArtistPage from "./screens/ArtistPage.js";
import DetailView from "./screens/DetailView.js";
import ChatPage from "./screens/ChatPage.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="SwipeStack" component={SwipeStack} />
      {/* <Tab.Screen name="ArtistAlley" component={ArtistAlley} /> */}
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
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
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    // </Provider>
  );
}

registerRootComponent(App);
