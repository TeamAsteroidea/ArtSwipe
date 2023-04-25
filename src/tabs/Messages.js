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
} from "react-native";

import Colors from "constants/Colors.js";
import MessagesToolbar from "components/Messages/MessagesToolbar.js";
import MessagesChatList from "components/Messages/MessagesChatList.js";

const Messages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 65, borderWidth: 1 }}>
        <Text>Messages Header</Text>
      </View>
      <MessagesToolbar navigation={navigation} />
      <MessagesChatList navigation={navigation} />
    </View>
  );
};

Messages.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGLIGHT,
  },
});
