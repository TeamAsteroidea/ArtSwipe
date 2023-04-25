import * as React from "react";
import PropTypes from "prop-types";
// import { store } from '/redux/store';
import {
  StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  Pressable,
  ScrollView,
} from "react-native";

// import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";
import MessagesChatItem from "./MessagesChatItem.js";

const MessagesChatList = ({ navigation }) => {
  const dummyData = [
    {
      image: "",
      name: "Background Character",
      recentMessage:
        "What do you think about my offer? I think it's quite fair.",
    },
  ];
  const chatList = []
    .concat(...Array(20).fill(dummyData))
    .map((chat, index) => {
      return (
        <MessagesChatItem
          key={index}
          navigation={navigation}
          image={chat.image}
          name={chat.name}
          recentMessage={chat.recentMessage}
        />
      );
    });
  return (
    <View style={styles.chatList}>
      <ScrollView>
        <View style={styles.storeLink}>
          <Pressable
            style={styles.storeButton}
            onPress={() => {
              console.log("clicked");
            }}
          >
            <Text style={{ ...Fonts.SUBTITLE, textAlign: "right" }}>
              Seller Store Chats {">"}
            </Text>
          </Pressable>
        </View>
        {chatList}
      </ScrollView>
    </View>
  );
};

MessagesChatList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MessagesChatList;

const styles = StyleSheet.create({
  storeLink: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  storeButton: {
    width: 180,
    marginTop: 10,
    padding: 10,
  },
  chatList: {
    flex: 1,
    justifyContent: "flex-start",
    overflow: "scroll",
  },
});
