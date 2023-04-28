import * as React from "react";
import {useState, setState, useEffect} from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  StyleSheet,
  Button,
  View,
  Image,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

import BookmarkButton from '../modular/bookmarkButton';
import { TEXT, SUBTEXT } from '../../constants/Fonts.js';
import { timeRemaining } from '../../scripts/helperFunctions/timeRemaining';
import Timer from '../../scripts/helperFunctions/Timer';
import * as generic from 'src/server/fs-generic.js'

const styles = StyleSheet.create({
  cardContainer:{
    width: '100%',
    height: 120,
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 75,
    height: 75,
    margin: 20,
    marginRight: 0,
  },
  image: {
    flex: 1
  },
  textContainer: {
    width: 200,
    height: 76,
    margin: 20,
  },
  bookmarkContainer: {
    // backgroundColor: 'grey',
    justifyContent: 'center',
  }
})

const BookmarkCard = ({ itemID, navigation }) => {

  const [item, setItem] = useState(null);
  const [clock, setClock] = useState(null);

  useEffect(() => {
    generic.getOne('art', itemID)
      .then(res => {
        setItem(res);
      })
      .catch(err => console.log(err, 'err retrieving art item'))
  }, [])

  useEffect(() => {
    if (item) {
      setClock(timeRemaining(item))
    }
  }, [item])

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(clock - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [clock]);

  if (item) {
    return(
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.image}
            source={{uri: item.image}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.TEXT, { fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold'}}>Now: {item.bidStartingPrice}</Text>
          <Text style={{ fontSize: 10 }}>You bid: {item.bidIncrementPrice}</Text>
          <Text style={{ fontSize: 13, fontWeight: 'bold'}}>Time left:</Text>
          <View>
            <Text>
              <Timer remainingTime={clock}/>
            </Text>
          </View>
        </View>
        <View style={styles.bookmarkContainer}>
          <BookmarkButton item={item}/>
        </View>
      </View>);
  }
};

BookmarkCard.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BookmarkCard;