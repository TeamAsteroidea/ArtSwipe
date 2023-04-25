import * as React from "react";
import { useState } from "react";
// import PropTypes from "prop-types";
// import { store } from '/redux/store';
import {
  StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  TextInput,
} from "react-native";

import Colors from "constants/Colors.js";

const MessagesSearch = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.searchBar}>
      <View style={styles.searchInput}>
        <TextInput
          placeholder="search messages..."
          onChangeText={(text) => setSearchText(text)}
        ></TextInput>
      </View>
    </View>
  );
};

MessagesSearch.propTypes = {};

export default MessagesSearch;

const styles = StyleSheet.create({
  searchBar: {
    height: 65,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  searchInput: {
    backgroundColor: Colors.INPUTS,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
