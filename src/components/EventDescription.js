import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  ScrollView,
} from "react-native";

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

const EventDescription = ({ eventData }) => {
  return (
    <View>
      <Text>{eventData.imageUrl}</Text>
      <Text>{eventData.eventDate}</Text>
      <Text>{eventData.title}</Text>
      <Text>{eventData.venue}</Text>
      <Text>{eventData.description}</Text>
      <Text>{eventData.contactInfo}</Text>
    </View>);
};

EventDescription.propTypes = {
  eventData: PropTypes.object.isRequired,
};

export default EventDescription;