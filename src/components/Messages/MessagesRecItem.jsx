import * as React from "react";
import PropTypes from "prop-types";
// import { store } from '/redux/store';
import {
  StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  // Text,
  // Alert,
  Pressable,
} from "react-native";

import Colors from "constants/Colors.js";

const MessagesRecItem = ({ navigation, image }) => {
  return (
    <View style={styles.chatItem}>
      <Pressable
        style={styles.chatButton}
        onPress={() => {
          console.log("clicked");
        }}
      >
        <View style={styles.chatIcon}></View>
      </Pressable>
    </View>
  );
};

MessagesRecItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default MessagesRecItem;

const styles = StyleSheet.create({
  chatItem: {},
  chatButton: {
    flexDirection: "row",
    padding: 10,
  },
  chatIcon: {
    height: 65,
    width: 65,
    backgroundColor: Colors.PLACEHOLDER,
    borderRadius: 33,
  },
});
