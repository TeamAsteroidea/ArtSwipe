import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";

// Subheader should receive two props: navigation passed down from the Stack navigator and title to specify what to display for the subheader text.
const Subheader = ({ navigation, title }) => {
  const isRender = false;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome
          name="chevron-left"
          size={30}
          color={Colors.PRIMARY}
          onPress={() => {
            navigation.goBack();
          }}
        ></FontAwesome>
        <Text style={Fonts.SUBHEADER}>{title}</Text>
      </View>
      {isRender && (
        <Pressable
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: Colors.PLACEHOLDER,
          }}
        ></Pressable>
      )}
    </View>
  );
};

Subheader.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Subheader;

const styles = StyleSheet.create({
  container: {
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
