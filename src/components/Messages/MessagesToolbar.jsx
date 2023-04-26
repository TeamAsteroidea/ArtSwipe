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

import MessagesSearch from "./MessagesSearch.jsx";
import MessagesChatRecs from "./MessagesChatRecs.jsx";

const MessagesToolbar = ({ navigation }) => {
  return (
    <View style={styles.toolbar}>
      <MessagesSearch />
      <MessagesChatRecs navigation={navigation} />
    </View>
  );
};

MessagesToolbar.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MessagesToolbar;

const styles = StyleSheet.create({
  toolbar: {
    height: 150,
  },
});
