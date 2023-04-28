import * as React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  Image,
  // ScrollView,
  Pressable,
} from "react-native";
// import { useNavigation } from '@react-navigation/native';

// {
//   id: '12347',
//   userId: '54321',
//   userName: 'dennis',
//   title: 'An Art Event 3',
//   venue: 'A Gallery 3',
//   eventDate: '1682382828',
//   websiteUrl: 'eventWeb@web.com',
//   contactInfo: 'user@user.com',
//   description: 'Art description here 3',
//   imageUrl: 'website.com/image3.png',
// }

const EventPressable = styled.Pressable`
  flexDirection: row;
  height: 150px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 40px;
`;

const EventImgContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

`;
const EventImg = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EventView = styled.View`
  flex: 2;
  justify-content: space-around;
  align-items: left;
`;

const EventBold = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const EventNormal = styled.Text`
font-size: 17px;
font-weight: 400;
`;

const ViewBorder = styled.View`
`;

const Event = ({ eventData, navigation }) => {
  // console.log('eventData is', eventData);
  if (Object.keys(eventData).indexOf('imageurl') >= 0) {
    return (
      <ViewBorder>
        <EventPressable onPress={() => {
          navigation.navigate('EventDescription', {
            eventData,
          })
        }}>
          <EventImgContainer>
            <EventImg
              source={{
                uri: eventData.imageurl,
              }}
            />
          </EventImgContainer>
          <EventView>
            <EventBold>{eventData.eventdate}</EventBold>
            <EventBold>{eventData.title}</EventBold>
            <EventNormal>{eventData.venue}</EventNormal>
          </EventView>
        </EventPressable>
      </ViewBorder>
    );
  } else if (Object.keys(eventData).length > 0) {
    return (
      <EventPressable onPress={() => {
        navigation.navigate('EventDescription', {
          eventData,
        })
      }}>
        <EventView>
          {eventData.eventdate ? <EventBold>{eventData.eventdate}</EventBold> : <EventBold />}
          {eventData.title ? <EventBold>{eventData.title}</EventBold> : <EventBold />}
          {eventData.venue ? <EventNormal>{eventData.venue}</EventNormal> : <EventNormal />}
        </EventView>
      </EventPressable>
    );
  }
  return (
    <View />
  );
};

Event.propTypes = {
  eventData: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Event;
