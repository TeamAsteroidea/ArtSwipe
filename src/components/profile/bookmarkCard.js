import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";


const styles = StyleSheet.create({
  cardContainer:{
    width: '100%',
    height: 150,
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'grey',
    width: 75,
    height: 75,
  }
})

const BookmarkCard = ({ item, navigation }) => {
  return(
  <View style={styles.cardContainer}>
    <View style={styles.iconContainer}>
       {/* <View style={styles.iconPlaceholder} /> */}
    </View>
    <View>
      <Text>{item.name}</Text>
      <Text>Now: {item.bidStartingPrice}</Text>
      <Text>You bid: {item.bidIncrementPrice}</Text>
      <Text>Time left: {item.bidDuration}</Text>
    </View>
  </View>);
};

BookmarkCard.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BookmarkCard