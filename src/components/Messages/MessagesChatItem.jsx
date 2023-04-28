import * as React from "react";
import PropTypes from "prop-types";
// import { store } from '/redux/store';
import {
  StyleSheet,
  Image,
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
  navigation,
  chat_id,
  image,
  name,
  recentMessage,
  chatData,
}) => {
  return (
    <View style={styles.chatItem}>
      <Pressable
        style={styles.chatButton}
        onPress={() => {
          navigation.navigate("ChatPage", { chat_id, chatData });
        }}
      >
        <View style={styles.chatIcon}>
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.chatText}>
          <Text style={Fonts.SUBTITLE} numberOfLines={1}>
            {name}
          </Text>
          <Text style={Fonts.ACCENT} numberOfLines={1}>
            {recentMessage}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

MessagesChatItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recentMessage: PropTypes.string.isRequired,
  chat_id: PropTypes.string.isRequired,
  chatData: PropTypes.object.isRequired,
};

export default MessagesChatItem;

const styles = StyleSheet.create({
  chatItem: {
    width: "100%",
    height: 70,
    marginVertical: 6,
  },
  chatButton: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 1,
  },
  chatIcon: {
    height: 65,
    width: 65,
    backgroundColor: Colors.PLACEHOLDER,
    borderRadius: 33,
    overflow: "hidden",
  },
  chatText: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
    gap: 5,
  },
});
