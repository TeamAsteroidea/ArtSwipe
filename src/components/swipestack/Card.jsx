import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import PropTypes from 'prop-types';
// import MoreInfo from './components/MoreInfo.jsx';
// import Timer from './components/Timer.jsx';
import { handleLeftSwipe, handleRightSwipe } from './helperFunctions/swipeHelperFunctions.js';

const styles = {
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  prevPrice: {
    position: 'absolute',
    bottom: 3,
    margin: 10,
    color: '#fff',
  },
  bidPrice: {
    position: 'absolute',
    bottom: 5,
    margin: 10,
    color: '#fff',
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
  loadMore: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  }
}

function Card ({ art, user, handleCardLeftScreen, index }) {
  console.log(art.title, index);
  const outOfFrame = (dir, art) => {
    // if (dir === 'right') {
    //   handleRightSwipe(art, user);
    // } else {
    //   handleLeftSwipe(art, user);
    // }
    // return;
    // console.log('in outOfFrame')
    handleCardLeftScreen(index);
  }

  return (
    <Swiper
      onCardLeftScreen={(dir) => outOfFrame(dir, art)}
      // onSwipe={handleCardLeftScreen}
      // preventSwipe={['up', 'down']}
    >
      <View style={styles.card}>
        <Text style={styles.prevPrice}>Previous Value:{art.bidPrice}</Text>
        <Text style={styles.bidPrice}>{art.birdPrice + art.bidIncrement}</Text>
        <Text style={styles.cardTitle}>{art.title}</Text>
        <Text style={styles.cardArtist}>{art.artist}</Text>
      </View>
    </Swiper>
  )
}

Card.propTypes = {
  art: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleCardLeftScreen: PropTypes.func,
  index: PropTypes.number
}

export default Card;