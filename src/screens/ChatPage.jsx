import * as React from "react";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
// import { store } from '/redux/store';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  // Alert,
  // ScrollView,
  FlatList,
  TextInput,
} from "react-native";

import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";
import Subheader from "components/modular/Subheader.jsx";
import ChatItem from "components/Messages/ChatItem.jsx";

const dummyData = {
  chat_id: 1,
  message_id: 1,
  user_id: 2,
  message_date: 1682447971,
  message_body:
    "Hey, my name is John. I'm interested in your art. Can you tell me more about it?",
};

const ChatPage = ({ navigation }) => {
  const scrollViewRef = useRef();
  const [chats, setChats] = useState([].concat(...Array(100).fill(dummyData)));
  const [isBottom, setBottom] = useState(true);
  const [bodyText, setBodyText] = useState("");

  const handleViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    setBottom(false);
    viewableItems.some((item) => {
      if (item.index === 0) {
        setBottom(true);
      }
    });
  });

  const handleSendChat = () => {
    console.log(bodyText);
    setChats((chats) =>
      [
        {
          chat_id: 1,
          message_id: Math.round(Math.random() * 10000),
          user_id: 1,
          message_date: Date.now(),
          message_body: bodyText,
        },
      ].concat(chats)
    );
    setBodyText("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BGLIGHT }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
        style={styles.container}
      >
        <Subheader navigation={navigation} title="Background Character A" />
        <View style={styles.chatStore}></View>
        <FlatList
          ref={scrollViewRef}
          data={chats}
          inverted={true}
          removeClippedSubviews={true}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 90 }}
          renderItem={({ item }) => {
            return (
              <ChatItem
                chat_id={item.chat_id}
                message_id={item.message_id}
                user_id={item.user_id}
                date={item.message_date}
                body={item.message_body}
              />
            );
          }}
        />

        {!isBottom && (
          <TouchableOpacity
            style={styles.scrollBottomButton}
            onPress={() => {
              scrollViewRef.current.scrollToIndex({
                index: 0,
              });
            }}
          >
            <Text style={{ ...Fonts.TEXT, textAlign: "center" }}>
              scroll to bottom
            </Text>
          </TouchableOpacity>
        )}
        <View style={styles.chatInputBar}>
          <View
            style={{
              flex: 1,
              borderRadius: 8,
              maxHeight: 100,
              marginHorizontal: 10,
              backgroundColor: Colors.INPUTS,
            }}
          >
            <TextInput
              style={{ marginHorizontal: 20, marginVertical: 12 }}
              placeholder="write your message..."
              onChangeText={(text) => setBodyText(text)}
              value={bodyText}
              multiline
            ></TextInput>
          </View>
          <TouchableOpacity title="New Chat" onPress={handleSendChat}>
            <Text>New Chat</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    borderWidth: 1,
  },
  chatScroll: {
    flexGrow: 1,
    flexDirection: "column-reverse",
  },
  scrollBottomButton: {
    position: "fixed",
    height: 30,
    marginTop: -30,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  chatInputBar: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
