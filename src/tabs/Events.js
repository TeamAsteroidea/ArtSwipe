import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import styled from 'styled-components/native';
import {
  // StyleSheet,
  Button,
  View,
 // SafeAreaView,
  Text,
  // Alert,
  ScrollView,
  FlatList,
} from "react-native";

import Event from '../components/Events/Event.js';

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
    imageUrl: 'https://www.cdm.org/wp-content/uploads/2023/02/2023_Muneeba-Zeeshan-Gallery-01.png',
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
    imageUrl: 'https://www.cdm.org/wp-content/uploads/2023/02/2023_Muneeba-Zeeshan-Gallery-01.png',
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
    imageUrl: 'https://media.istockphoto.com/id/1218961153/photo/art-museum.jpg?s=612x612&w=0&k=20&c=9fK54fu1mjzFjDOSqg_jfrMy4Hkp8vsmImB7rLrbhJs=',
  },
];

// id (String)
// userId (User who created Event) (String) (Should match Users Collection)
// userName (String)
// title (String)
// venue (String)
// eventDate (in seconds–String or Number?)
// websiteUrl (String)
// contactInfo email (string)
// description (String)
// shortDescription (Optional String ?)
// imageUrl (String)



const Events = ({ navigation }) => {
  // const eventsList = [];

  // eventDummyData.forEach((eventData) => (
  //   <Event key={eventData.id} eventData={eventData}/>
  // ));


  return (
    <View>
      <Text>Event Page</Text>
      <Button
        title="This is what a button that goes to another page looksk like"
        onPress={() => navigation.navigate('Example')}
      />
      <FlatList>
        data={eventDummyData}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <Text>Hello World</Text>}
      </FlatList>
    </View>);
};

Events.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Events;
