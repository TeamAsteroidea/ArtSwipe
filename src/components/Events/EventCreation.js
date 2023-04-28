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
  // ScrollView,
} from "react-native";

import { getAllEvents } from '../../server/fs-events.js';
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

const EventCreation = ({ route }) => {
  const { eventData } = route.params;
  return (
    <View>
      <Text>EventCreation</Text>
      <Button
        title="Event Edit Button"
        onPress={async () => {
          await getAllEvents();
        }}
      />
    </View>);
};

EventCreation.propTypes = {
  route: PropTypes.object.isRequired,
};

export default EventCreation;