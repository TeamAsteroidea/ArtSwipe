import * as React from "react";
import PropTypes from "prop-types";
// import { store } from '/redux/store';
import {
  StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  ScrollView,
} from "react-native";

import Colors from "constants/Colors.js";
import ChatItem from "components/Messages/ChatItem.js";

const ChatPage = ({ navigation }) => {
  const dummyData = [
    {
      chat_id: 1,
      message_id: 1,
      user_id: 1,
      message_date: 1682447971,
      message_body:
        "Hey, my name is John. I'm interested in your art. Can you tell me more about it?",
    },
  ];
  const chats = [].concat(...Array(20).fill(dummyData)).map((chat, index) => {
    return (
      <ChatItem
        key={index}
        id={chat.message_id}
        user_id={chat.user_id}
        date={chat.message_date}
        body={chat.message_body}
      />
    );
  });
  return (
    <View style={styles.container}>
      <View style={{ height: 65, borderWidth: 1 }}>
        <Text>Messages Header</Text>
      </View>
      <View style={styles.chatStore}></View>
      <ScrollView>{chats}</ScrollView>
    </View>
  );
};

ChatPage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ChatPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGLIGHT,
  },
  chatStore: {
    height: 80,
    paddingHorizontal: 10,
  },
  chatBody: {
    flex: 1,
    justifyContent: "flex-start",
    overflow: "scroll",
  },
});
