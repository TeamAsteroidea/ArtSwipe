import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';
import {
  // StyleSheet,
  View,
  SafeAreaView,
  Text,
  ImageBackground
} from "react-native";
// import Bids from './components/Bids.jsx';
// import Card from './Card.jsx';
import Timer from './components/Timer.jsx';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  flex: 1;
  margin-top: -6px;
`;

const Card = styled.View`
  background-color: white;
  height: 75%;
  border-radius: 20px;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 67%;
  margin-top: 10%;
  align-self: center;
`;

const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 20%;
`;

const Bid = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

const Info = styled.View`
display: flex;
`

const ScreenContainer = styled.View`
  flex: 1;
  background-color: green;
  height: 100%;
`

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
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

function Display ({ user, stack }) {
  // use a state to track which index of card the use is currently on
  const [currentArtIndex, setCurrentArtIndex] = useState(0);
  const [clock, setClock] = useState(stack[currentArtIndex].auctionTimeLeft);
  const currentIndexRef = useRef(currentArtIndex);
  const [lastCardSwiped, setLastCardSwiped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(clock - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [clock]);

  const handleCardLeftScreen = (index) => {
    currentIndexRef.current = index;
    if (index === stack.length - 1) {
      setLastCardSwiped(true);
    } else {
      setClock(stack[index + 1].auctionTimeLeft);
      setCurrentArtIndex(index + 1);
    }
  }

  useEffect(() => {
    console.log('current index', currentArtIndex);
  }, [currentArtIndex]);

  return (
    <ScreenContainer>
      {/* if there are no cards left, don't show the timer */}
      {!lastCardSwiped && <Timer remainingTime={clock}/>}
      {/* <View style={styles.cardContainer}>
        {stack.map((art, index) => {
            return <Card key={art.id} index={index} art={art} user={user} handleCardLeftScreen={handleCardLeftScreen}/>
        })}
      </View> */}
      <CardContainer>
        <Swiper
          containerStyle={{ backgroundColor: 'transparent'}}
          stackSize={3}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity
          cards={stack}
          renderCard={card => (
            <Card key={card.title}>
              <CardImage source={card.image}/>
              <Info>
                <PriceContainer>
                  <Text>Previous Value: {card.bidPrice}</Text>
                  <Bid>{card.bidPrice + card.bidIncrement}</Bid>
                </PriceContainer>
                <View>
                  <Text>{card.title}</Text>
                  <Text>{card.artist}</Text>
                </View>
              </Info>
            </Card>
          )}
        />
      </CardContainer>
    </ScreenContainer>
  )
}

Display.propTypes = {
  user: PropTypes.object.isRequired,
  stack: PropTypes.array.isRequired
};

export default Display;