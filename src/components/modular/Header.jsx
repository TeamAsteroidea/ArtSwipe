import * as React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";

// Header should receive two props: navigation passed down from the Stack navigator and title to specify what to display for the header text.
const Header = ({ navigation, title, customNode }) => {
  const isRender = customNode ? true : false;
  return (
    <View style={styles.container}>
      <View>
        <Text style={Fonts.HEADER}>{title}</Text>
      </View>
      {isRender && (
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: Colors.PLACEHOLDER,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {customNode}
        </View>
      )}
    </View>
  );
};

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  customNode: PropTypes.node,
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
});
