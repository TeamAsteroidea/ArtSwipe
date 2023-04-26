import * as React from "react";
import PropTypes from 'prop-types';
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

const Event = ({ eventData, navigation }) => {

  const imgObj = {
    uri: eventData.imageUrl,
  };

  return (
    <Pressable onPress={() => {
      navigation.navigate('EventDescription', {
        eventData,
      })
    }}>
      <Image
        style={{ width: '100%', height: 100 }}
        source={imgObj}
      />
      <Text>{eventData.eventDate}</Text>
      <Text>{eventData.title}</Text>
      <Text>{eventData.venue}</Text>
    </Pressable>);
};

Event.propTypes = {
  eventData: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Event;