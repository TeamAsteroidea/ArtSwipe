import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from "constants/Colors.js";
import Fonts from "constants/Fonts.js";

function Header () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
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
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: '#034448'
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  }
});