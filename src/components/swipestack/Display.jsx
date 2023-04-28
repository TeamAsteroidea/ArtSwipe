import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';
import {
  Button,
  View,
  Text,
  Image,
} from "react-native";
import Timer from './components/Timer.jsx';
import styled from 'styled-components/native';
import { handleLeftSwipe, handleRightSwipe } from './helperFunctions/swipeHelperFunctions.js';
import { timeRemaining } from '../../scripts/helperFunctions/timeRemaining.js';

function Display ({ user, stack, navigation, loadCards }) {
  const [dumpster, setDumpster] = useState(false);
  const [money, setMoney] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clock, setClock] = useState(timeRemaining(stack[currentIndex]));
  // Might be able to get rid of timeRemaining in the helper functions
  // const [clock, setClock] = useState(stack[currentIndex].auctionTimeLeft);
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
    setClock(timeRemaining(stack[currentIndex]))
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
          onPress={() => navigation.navigate('BiddingHistory')}>
          <ModalImage
            source={require('../../../assets/activebids.png')}
          />
        </OpenModal>
      </ModalContainer>
      <CardContainer>
        {dumpster && <Image source={require('../../../assets/dumpster.gif')} />}
        {money && <Money source={require('../../../assets/giphy.gif')} />}
        {!lastCardSwiped ? (
        <Swiper
          containerStyle={{ backgroundColor: 'transparent'}}
          stackSize={3}
          cardIndex={0}
          showSecondCard={false}
          verticalSwipe={false}
          animateCardOpacity
          horizontalThreshold={210}
          // overlayLabels={{
          //   left: {
          //     title: 'x',
          //     style: {
          //       label: {
          //         textAlign: 'right',
          //         color: '#c20a2e',
          //         fontSize: 80,
          //         marginTop: -20
          //       },
          //     },
          //   },
          //   right: {
          //     title: '✓',
          //     style: {
          //       label: {
          //         color: '#2EC20A',
          //         fontSize: 65,
          //         marginTop: -12
          //       }
          //     }
          //   }
          // }}
          onSwiping={(arg) => {
            if (arg < -25) {
              setMoney(false);
              setDumpster(true);
            } else if (arg > 25){
              setDumpster(false);
              setMoney(true);
            }
          }}
          onSwipedAborted={() => {
            setDumpster(false);
            setMoney(false);
          }}
          onSwipedLeft={(index) => {
            setDumpster(false);
            handleLeftSwipe(stack[index], user);
          }}
          onSwipedRight={(index) => {
            setMoney(false);
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
          renderCard={(card) => (
            <Card key={card.name}>
              {console.log(card)}
              <CardImage source={{uri: card.image}}/>
              <Info>
                <PriceContainer>
                  <PreviousBid>Previous Value:</PreviousBid>
                  <Text>{USDollar.format(card.bidStartingPrice)}</Text>
                </PriceContainer>
                <Bid>{USDollar.format(card.bidStartingPrice + card.bidIncrementPrice)}</Bid>
                <TitleContainer>
                  <Title>{card.name}</Title>
                  <Artist>{card.artistName}</Artist>
                </TitleContainer>
                <ButtonWrapper>
                  <Button
                    onPress={() => navigation.navigate('DetailView', {
                      card: card,
                    })}
                    title="i"
                    color="white"
                  />
                </ButtonWrapper>
              </Info>
            </Card>
          )}
        />) :
        (
          <LastCard
            onPress={() => loadCards()}
          >
            <Load>
              Load Cards
            </Load>
          </LastCard>
        )}
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

const LastCard = styled.Pressable`
  flex: 1;
  top: 250px;
  right: 90px;
  position: absolute;
  justify-content: center;
  align-items: center;
  border: 5px solid white;
  border-radius: 30px;
  box-shadow: 0 0 5px #ccc;
`

const Load = styled.Text`
  color: white;
  margin: 50px;
  font-size: 20px;
`

const Money = styled.Image`
  flex: 1;
  position: absolute;
  height: 800px;
`