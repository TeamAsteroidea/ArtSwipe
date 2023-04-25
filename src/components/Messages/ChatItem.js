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
  Pressable,
} from "react-native";

import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";

const MessagesChatItem = ({
  chat_id,
  message_id,
  user_id,
  message_date,
  message_body,
}) => {
  return (
    <View style={styles.chatItem}>
      <View style={styles.chatText}>
        <Text>{message_body}</Text>
      </View>
    </View>
  );
};

MessagesChatItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  chat_id: PropTypes.number.isRequired,
  message_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  message_date: PropTypes.string.isRequired,
  message_body: PropTypes.string.isRequired,
};

export default MessagesChatItem;

const styles = StyleSheet.create({
  chatItem: {
    height: 70,
    marginVertical: 6,
    borderWidth: 1,
  },
  chatText: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
    gap: 5,
  },
});
