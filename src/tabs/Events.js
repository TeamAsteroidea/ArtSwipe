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

import Event from '../components/Event.js';

const eventDummyData = [
  {
    id: '12345',
    userId: '54321',
    userName: 'dennis',
    title: 'An Art Event',
    venue: 'A Gallery',
    eventDate: '1682382826',
    websiteUrl: 'eventWeb@web.com',
    contactInfo: 'user@user.com',
    description: 'Art description here',
    imageUrl: 'website.com/image.png',
  },
  {
    id: '12346',
    userId: '54321',
    userName: 'dennis',
    title: 'An Art Event 2',
    venue: 'A Gallery 2',
    eventDate: '1682382827',
    websiteUrl: 'eventWeb@web.com',
    contactInfo: 'user@user.com',
    description: 'Art description here 2',
    imageUrl: 'website.com/image2.png',
  },
  {
    id: '12347',
    userId: '54321',
    userName: 'dennis',
    title: 'An Art Event 3',
    venue: 'A Gallery 3',
    eventDate: '1682382828',
    websiteUrl: 'eventWeb@web.com',
    contactInfo: 'user@user.com',
    description: 'Art description here 3',
    imageUrl: 'website.com/image3.png',
  },
];

// id (string)
// userId (User who created Event) (number) (Should match Users Collection)
// userName
// title (String)
// venue (String)
// eventDate (in seconds–String or Number?)
// websiteUrl (String)
// contactInfo email (string)
// description (String)
// shortDescription (Optional ?)
// imageUrl (String)



const Events = ({ navigation }) => {
  return (
    <View>
      <Text>Event Page</Text>
      <Button
        title="This is what a button that goes to another page looksk like"
        onPress={() => navigation.navigate('Example')}
      />
      {eventDummyData.map((eventData) => (
        <Event key={eventData.id} eventData={eventData}/>
      ))}
    </View>);
};

Events.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Events;