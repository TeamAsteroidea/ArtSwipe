import * as React from "react";
import PropTypes from "prop-types";
import FontAwesome, { FA5Style } from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Colors, { colorPicker } from "constants/Colors.js";
// import Fonts from "constants/Fonts.js";

const StackScreenOptions = (icon, size, style) => {
  const solid = style === "solid";
  const light = style === "light";

  return {
    unmountOnBlur: true,
    tabBarShowLabel: false,
    tabBarButton: ({ accessibilityState, onPress }) => (
      <View
        style={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <View style={styles.container}>
            <FontAwesome
              name={icon}
              size={size}
              color={
                accessibilityState.selected
                  ? colorPicker.TEALLIGHT
                  : colorPicker.WHITE
              }
              solid={solid}
              light={light}
            />
          </View>
        </TouchableOpacity>
      </View>
    ),
  };
};

StackScreenOptions.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default StackScreenOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
