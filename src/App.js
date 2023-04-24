import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import {
  StyleSheet,
  // Button,
  // View,
  SafeAreaView,
  // Text,
  // Alert,
} from "react-native";
// yo just a heads up it's like two lines to change if we do need to swap out the bottom tabs for tops or vice versa
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


/*~~~~TABS GO HERE~~~~*/
import ArtistAlley from './tabs/ArtistAlley.js';
import Events from './tabs/Events.js';
import Messages from './tabs/Messages.js';
import Profile from './tabs/Profile.js';
import SwipeStack from './tabs/SwipeStack.js';

/*~~~~SCREENS GO HERE~~~~*/
import ArtistPage from './screens/ArtistPage.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// dummy tab style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});


function Home() {
  // this order is suuuuuuper tentative
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="SwipeStack" component={SwipeStack} />
        <Tab.Screen name="ArtistAlley" component={ArtistAlley} />
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function App() {
  return (
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
          options={{ headerShown: false, gestureDirection: 'vertical'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);








