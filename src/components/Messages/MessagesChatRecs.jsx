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
} from "react-native";

import MessagesRecItem from "./MessagesRecItem.jsx";

const MessagesChatRecs = ({ navigation }) => {
  return (
    <View style={styles.chatRecs}>
      <View style={styles.chatList}>
        <MessagesRecItem navigation={navigation} image={""} />
        <MessagesRecItem navigation={navigation} image={""} />
        <MessagesRecItem navigation={navigation} image={""} />
        <MessagesRecItem navigation={navigation} image={""} />
      </View>
    </View>
  );
};

MessagesChatRecs.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MessagesChatRecs;

const styles = StyleSheet.create({
  chatRecs: {
    height: 85,
  },
  chatList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    borderBottomWidth: 1,
  },
});
