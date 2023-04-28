import * as React from "react";
import { useSelector } from "react-redux";
// import { store } from '/redux/store';
import {
  StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  // Pressable,
} from "react-native";
import PropTypes from "prop-types";

import Colors, { colorPicker } from "constants/Colors.js";
// import Fonts from "constants/Fonts.js";

const MessagesChatItem = ({
  chat_id,
  message_id,
  user_id,
  isContinueAbove,
  isContinueBelow,
  date,
  body,
}) => {
  const uid = useSelector((state) => state.user.user).uid;
  // const uid = "ua";
  let isSenderUser = false;
  if (user_id === uid) {
    isSenderUser = true;
  }
  return (
    <View
      style={{
        alignItems: isSenderUser ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={{
          ...styles.chatItem,
          backgroundColor: isSenderUser
            ? Colors.PRIMARYLIGHT
            : colorPicker.GREYLIGHT,
          borderTopLeftRadius: isContinueAbove && !isSenderUser ? 4 : 16,
          borderTopRightRadius: isContinueAbove && isSenderUser ? 4 : 16,
          borderBottomLeftRadius: isContinueBelow && !isSenderUser ? 4 : 16,
          borderBottomRightRadius: isContinueBelow && isSenderUser ? 4 : 16,
          marginTop: isContinueAbove ? 3 : 6,
          marginBottom: isContinueBelow ? 3 : 6,
        }}
      >
        <View style={styles.chatText}>
          <Text>{body}</Text>
        </View>
      </View>
    </View>
  );
};

MessagesChatItem.propTypes = {
  chat_id: PropTypes.string.isRequired,
  message_id: PropTypes.number.isRequired,
  user_id: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  isContinueAbove: PropTypes.bool.isRequired,
  isContinueBelow: PropTypes.bool.isRequired,
};

export default MessagesChatItem;

const styles = StyleSheet.create({
  chatItem: {
    width: 250,
    paddingVertical: 12,
    paddingHorizontal: 6,
    marginHorizontal: 45,
  },
  chatText: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
    gap: 5,
  },
});
