import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
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
import MessagesChatItem from "./MessagesChatItem.jsx";
import { getRooms } from "server/fs-messages.js";
import { setGroupData } from "src/redux/messagesReducer.js";

// import { groupData } from "../../../dummyData/dummyData.js";

const MessagesChatList = ({ navigation }) => {
  const dispatch = useDispatch();
  // const uid = useSelector((state) => state.user.user).uid;
  const uid = "sgBia5iAZvNEwIGE0hxvu8Az0xN2";
  const groups = useSelector((state) => state.messages.groupData);

  useEffect(() => {
    const getGroupList = async () => {
      const groupData = await getRooms(uid);
      dispatch(setGroupData(groupData));
    };
    getGroupList();
  }, []);

  const chatList = groups?.map((chat, index) => {
    return (
      <MessagesChatItem
        key={index}
        navigation={navigation}
        chat_id={chat.chat_id}
        image={chat.image}
        name={chat.name}
        chatData={chat}
        recentMessage={
          chat.messages.length > 0 ? chat.messages[0].message_body : ""
        }
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
            {/* <Text style={{ ...Fonts.SUBTITLE, textAlign: "right" }}>
              Seller Store Chats {">"}
            </Text> */}
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
