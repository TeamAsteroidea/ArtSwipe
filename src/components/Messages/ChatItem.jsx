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
  // Pressable,
} from "react-native";

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
  let isSenderUser = false;
  if (user_id === 1) {
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
  chat_id: PropTypes.number.isRequired,
  message_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
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
