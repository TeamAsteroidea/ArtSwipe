import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";

function Header () {
  return (
    <View style={styles.container}>
      <Text style={Fonts.HEADER}>
        ArtSwipe
      </Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: '#034448'
  },
});