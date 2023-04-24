import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import { StyleSheet, Button, View, Text, Image,} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    width: 300,
    height: 75,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default function Option() {
  //   <Button
  //     title="This is what a button that goes to another page looksk like"
  //     // onPress={() => navigation.navigate('Example')}
      // <View style={ styles.header }>
      //   <Text>Profile</Text>
      // </View>
  return (
    <View style={styles.container}>

    </View>
  )

}