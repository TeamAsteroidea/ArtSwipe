import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';
import {
  View,
  Text,
} from "react-native";
import Bids from './components/Bids.jsx';
import Timer from './components/Timer.jsx';
import styled from 'styled-components/native';
import { handleLeftSwipe, handleRightSwipe } from './helperFunctions/swipeHelperFunctions.js';

function Display ({ user, stack }) {
  // use a state to track which index of card the use is currently on
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clock, setClock] = useState(stack[currentIndex].auctionTimeLeft);
  const [lastCardSwiped, setLastCardSwiped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(clock - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [clock]);

  useEffect(() => {
    setClock(stack[currentIndex].auctionTimeLeft)
  }, [currentIndex])

  return (
    <ScreenContainer>
      {/* if there are no cards left, don't show the timer */}
      <TimerContainer>
        {!lastCardSwiped && <Timer remainingTime={clock}/>}
      </TimerContainer>
      <ModalContainer>
        <Bids user={user}/>
      </ModalContainer>
      <CardContainer>
        <Swiper
          containerStyle={{ backgroundColor: 'transparent'}}
          stackSize={3}
          cardIndex={0}
          verticalSwipe={false}
          animateCardOpacity
          overLayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  textAlign: 'right',
                  color: 'red',
                },
              },
            },
            right: {
              title: 'BID',
              style: {
                label: {
                  color: 'green',
                }
              }
            }
          }}
          onSwipedLeft={(index) => {
            handleLeftSwipe(stack[index], user);
          }}
          onSwipedRight={(index) => {
            handleRightSwipe(stack[index], user);
          }}
          onSwiped={() => {
            const index = currentIndex + 1;
            if (index === stack.length) {
              setLastCardSwiped(true);
            } else {
              setCurrentIndex(index);
            }
          }}
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

const CardContainer = styled.View`
  flex: 1;
  margin-top: -6px;
`;

const Card = styled.View`
  background-color: white;
  height: 75%;
  border-radius: 20px;
  box-shadow: 0 0 50px #ccc;
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

const TimerContainer = styled.View`
  position: absolute;
  top: 10px;
  left: 10px;
`
const ModalContainer = styled.View`
  position: absolute;
  top: -15px;
  right: 10px;
  z-index: 1;
`