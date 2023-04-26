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

// const items = [{"id":0,"bidders":[],"bidIncrementPrice":1,"bidStartingPrice":1,"artist":"Zoltan Boros","name":"Abandon the Post","currentOwner":"Nobody","image":"https://cards.scryfall.io/art_crop/front/9/8/983da138-f0f5-46c4-90c2-d3c34cc37d1f.jpg?1634350355","date_auctioned":0,"bidDuration":0}];

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