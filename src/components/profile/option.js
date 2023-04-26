import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import { StyleSheet, Button, TouchableOpacity, Pressable, View, Text, Image,} from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    // backgroundColor: 'pink',
    width: 300,
    height: 75,
    padding: 10,
  },
  touchContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    // backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'pink',
    // padding: 10,
    width: 60,
    height: 60,
  },
  iconPlaceholder: {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 25,
    // fontWeight: '500',
  },
});

export default function Option({ option, pageName, navigation }) {

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate(pageName)}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            {/* <View style={styles.iconPlaceholder} /> */}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{option}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  )

}