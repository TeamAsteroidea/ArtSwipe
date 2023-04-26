import * as React from "react";
import PropTypes from "prop-types";
// import { store } from '/redux/store';
import {
  StyleSheet,
  // Button,
  // View,
  SafeAreaView,
  // Text,
  // Alert,
} from "react-native";

import Colors from "constants/Colors.js";
import Header from "components/modular/Header.jsx";
import MessagesToolbar from "components/Messages/MessagesToolbar.jsx";
import MessagesChatList from "components/Messages/MessagesChatList.jsx";

const Messages = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Messages" />
      <MessagesToolbar navigation={navigation} />
      <MessagesChatList navigation={navigation} />
    </SafeAreaView>
  );
};

Messages.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGLIGHT,
  },
});
