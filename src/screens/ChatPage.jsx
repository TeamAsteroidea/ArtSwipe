import * as React from "react";
import { useRef, useState } from "react";
// import { store } from '/redux/store';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
  // Text,
  // Alert,
  // ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import Colors, { colorPicker } from "constants/Colors.js";
// import Fonts from "constants/Fonts.js";
import Subheader from "components/modular/Subheader.jsx";
import ChatItem from "components/Messages/ChatItem.jsx";
import { getMessagesByRoom, postMessage } from "server/fs-messages.js";
import { setMessageData, setGroupData } from "src/redux/messagesReducer.js";
import { getRooms } from "server/fs-messages.js";
// import { groupData } from "../../dummyData/dummyData.js";

const ChatPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const scrollViewRef = useRef();
  let unsubscribe = () => {};
  const [lastUpdated, setLastUpdated] = useState(0);
  const [isBottom, setBottom] = useState(true);
  const [bodyText, setBodyText] = useState("");
  const [inputBoxHeight, setInputBoxHeight] = useState(50);
  // const uid = useSelector((state) => state.user.user).uid;
  const uid = "sgBia5iAZvNEwIGE0hxvu8Az0xN2";
  const messageData = useSelector((state) => state.messages.messageData);
  const { chat_id, chatData, setGroups } = route.params;

  const defineStopListener = async () => {
    unsubscribe = await getMessagesByRoom(
      chat_id,
      ({ messageData, last_activity_date }) => {
        if (last_activity_date.seconds > lastUpdated) {
          setLastUpdated(last_activity_date.seconds);
          dispatch(setMessageData(messageData));
        }
      }
    );
  };
  defineStopListener();

  const handleViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    setBottom(false);
    viewableItems.some((item) => {
      if (item.index === 0) {
        setBottom(true);
      }
    });
  });

  const handleSendChat = async () => {
    setBodyText("");
    await postMessage({ chat_id }, uid, bodyText.trim());
    // if (messageData[0].user_id === uid) {
    //   messageData[0].isContinueBelow = true;
    // }
    // messageData.unshift({
    //   chat_id: chat_id,
    //   message_id: messageData.length,
    //   user_id: uid,
    //   message_body: bodyText.trim(),
    //   message_date: "",
    //   isContinueBelow: false,
    //   isContinueAbove: messageData[0].isContinueBelow,
    // });
    const groupData = await getRooms(uid);
    dispatch(setGroupData(groupData));
  };

  const onTextChange = ({ contentSize }) => {
    setInputBoxHeight(contentSize.height > 30 ? 90 : 50);
  };

  const imageIcon = (
    <View style={styles.chatIcon}>
      <Image
        source={{ uri: chatData.image }}
        resizeMode="contain"
        style={{ flex: 1 }}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BGLIGHT }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Subheader
          navigation={navigation}
          title={chatData.name}
          backFunction={unsubscribe}
          customNode={imageIcon}
        />
        {/* <View style={styles.chatStore}></View> */}
        <FlatList
          ref={scrollViewRef}
          data={messageData}
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
                isContinueAbove={item.isContinueAbove}
                isContinueBelow={item.isContinueBelow}
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
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name={"chevron-down"}
                size={25}
                color={colorPicker.GREY}
                light={true}
              />
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.chatInputBar}>
          <View
            style={{
              flex: 1,
              borderRadius: 8,
              maxHeight: inputBoxHeight,
              marginHorizontal: 10,
              backgroundColor: Colors.INPUTS,
            }}
          >
            <TextInput
              style={{
                flexGrow: 1,
                marginHorizontal: 20,
                marginVertical: 12,
              }}
              placeholder="write your message..."
              onChangeText={(text) => {
                setBodyText(text);
              }}
              onContentSizeChange={(event) => {
                onTextChange(event.nativeEvent);
              }}
              value={bodyText}
              multiline
            ></TextInput>
          </View>
          <TouchableOpacity title="New Chat" onPress={handleSendChat}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name={"paper-plane"}
                size={25}
                color={Colors.PRIMARY}
                solid={true}
              />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

ChatPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
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
  chatIcon: {
    height: 65,
    width: 65,
    backgroundColor: Colors.PLACEHOLDER,
    borderRadius: 33,
    overflow: "hidden",
  },
  scrollBottomButton: {
    position: "fixed",
    height: 30,
    marginTop: -30,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  chatInputBar: {
    minHeight: 80,
    maxHeight: 90,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
