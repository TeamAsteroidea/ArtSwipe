import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';
import {
  Button,
  View,
  Text,
} from "react-native";
import Timer from './components/Timer.jsx';
import styled from 'styled-components/native';
import { handleLeftSwipe, handleRightSwipe } from './helperFunctions/swipeHelperFunctions.js';

function Display ({ user, stack, navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clock, setClock] = useState(stack[currentIndex].auctionTimeLeft);
  const [lastCardSwiped, setLastCardSwiped] = useState(false);

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(clock - 1000);
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
        {!lastCardSwiped &&
          <View>
            <BiddingEnds>Bidding ends in:</BiddingEnds>
            <Timer remainingTime={clock}/>
          </View>
        }
      </TimerContainer>
      <ModalContainer>
        <OpenModal
          onPress={() => navigation.navigate('')}>
          <ModalImage
            source={require('../../../assets/activebids.png')}
          />
        </OpenModal>
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
              <CardImage source={{uri: card.image}}/>
              <Info>
                <PriceContainer>
                  <PreviousBid>Previous Value:</PreviousBid>
                  <Text>{USDollar.format(card.bidPrice)}</Text>
                </PriceContainer>
                <Bid>{USDollar.format(card.bidPrice + card.bidIncrement)}</Bid>
                <TitleContainer>
                  <Title>{card.name}</Title>
                  <Artist>{card.artist}</Artist>
                </TitleContainer>
                <ButtonWrapper>
                  <Button
                    onPress={() => navigation.navigate('DetailView')}
                    title="i"
                    color="white"
                  />
                </ButtonWrapper>
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
  stack: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Display;

const ScreenContainer = styled.View`
  flex: 1;
  background-color: #232323;
`

const CardContainer = styled.View`
  flex: 1;
  margin-top: -6px;
`;

const Card = styled.View`
  background-color: white;
  height: 75%;
  border-radius: 20px;
  box-shadow: 0 0 5px #ccc;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 67%;
  margin-top: 10%;
  align-self: center;
  padding: 20px;
`;

const PriceContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 20%;
`;

const PreviousBid = styled.Text`
  font-size: 12px;
  color: #666;
`

const Bid = styled.Text`
  font-size: 30px;
  position: absolute;
  color: #000;
  top: 20px;
  right: 20px;
`

const Info = styled.View`
  display: flex;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

const TitleContainer = styled.View`
  flex: 1;
  padding-top: 20px;
`

const Title = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 20px;;
`

const Artist = styled.Text`
  flex: 1;
  font-style: italic;
  font-size: 15px;
`

const TimerContainer = styled.View`
  position: absolute;
  top: 10px;
  left: 30px;
  justify-content: center;
  align-content: center;
`
const ModalContainer = styled.View`
  position: absolute;
  top: 0px;
  right: 10px;
  z-index: 1;
`

const OpenModal = styled.Pressable`
  flex: 1;
  backgroundColor: #D2A93F;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 4px;
  align-items: center;
  justify-content: center;
`

const ModalImage = styled.Image`
  flex: 1;
  max-width: 100%;
  max-height: 100%;
  resize-mode: contain;
`

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: #034448;
  align-items: center;
  justify-content: center;
`

const BiddingEnds = styled.Text`
  color: white;
`