import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";

// Subheader should receive four props:
// navigation passed down from the Stack navigator
// title to specify what to display for the subheader text.
// the backFunction will run before navigating back
// the custom button will allow for a custom react element to be rendered at the top right
const Subheader = ({ navigation, title, backFunction, customNode }) => {
  const isRender = customNode ? true : false;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome
          name="chevron-left"
          size={30}
          color={Colors.PRIMARY}
          onPress={() => {
            backFunction();
            navigation.goBack();
          }}
        ></FontAwesome>
        <Text style={Fonts.SUBHEADER}>{title}</Text>
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

Subheader.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  backFunction: PropTypes.func.isRequired,
  customNode: PropTypes.node,
};

export default Subheader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
