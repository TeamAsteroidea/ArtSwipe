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

const MessagesChatItem = ({ navigation, image, name, recentMessage }) => {
  return (
    <View style={styles.chatItem}>
      <Pressable
        style={styles.chatButton}
        onPress={() => {
          console.log("clicked");
        }}
      >
        <View style={styles.chatIcon}></View>
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
  },
  chatText: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
    gap: 5,
  },
});
