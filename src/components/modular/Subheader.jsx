import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import { setBgColor } from "src/redux/bgColorReducer.ts";
import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";

// Subheader should receive two props: navigation passed down from the Stack navigator and title to specify what to display for the subheader text.
const Subheader = ({ navigation, title }) => {
  const dispatch = useDispatch();
  const isRender = false;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome
          name="chevron-left"
          size={30}
          color={Colors.PRIMARY}
          onPress={() => {
            dispatch(setBgColor(Colors.PRIMARY));
            navigation.goBack();
          }}
        ></FontAwesome>
        <Text style={Fonts.SUBHEADER}>{title}</Text>
      </View>
      {isRender && (
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: Colors.PLACEHOLDER,
          }}
        ></TouchableOpacity>
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
