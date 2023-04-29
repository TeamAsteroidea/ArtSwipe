import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { AntDesign } from '@expo/vector-icons';
import {
  // StyleSheet,
  Button,
  View,
 // SafeAreaView,
  Text,
  // Alert,
  // ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { db } from "../server/firestore.js";


import Event from '../components/Events/Event.js';
import EventDescription from '../components/Events/EventDescription.js';
import EventCreation from '../components/Events/EventCreation.js';
import EventEdit from '../components/Events/EventEdit.js';
import UpdateEvent from '../components/Events/UpdateEvent.js';
import { getAllEvents } from '../server/fs-events.js';


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
    imageUrl: 'https://media.istockphoto.com/id/1218961153/photo/art-museum.jpg?s=612x612&w=0&k=20&c=9fK54fu1mjzFjDOSqg_jfrMy4Hkp8vsmImB7rLrbhJs=',
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
    imageUrl: 'https://www.artgalleryofhamilton.com/wp-content/uploads/2022/07/Morrisseau-Collection-Update-Magazine-Header.png',
  },
  {
    id: '12348',
    userId: '54321',
    userName: 'dennis',
    title: 'An Art Event 4',
    venue: 'A Gallery 4',
    eventDate: '1682382828',
    websiteUrl: 'eventWeb@web.com',
    contactInfo: 'user@user.com',
    description: 'Art description here 3',
    imageUrl: 'https://cdn1.epicgames.com/ue/product/Featured/ArtGalleryShowroom_featured-894x488-a14a0c325b5d9c14ce19b87c5168050b.png',
  },
  {
    id: '12349',
    userId: '54321',
    userName: 'dennis',
    title: 'An Art Event 5',
    venue: 'A Gallery 5',
    eventDate: '1682382828',
    websiteUrl: 'eventWeb@web.com',
    contactInfo: 'user@user.com',
    description: 'Art description here 3',
    imageUrl: 'https://opb-opb-prod.cdn.arcpublishing.com/resizer/Za9sEk6NzjlC0zoiv-BSlFE--nM=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/opb/ODIY7ZCJUJAATCWKDHVXK5VXKQ.jpg',
  },
  {
    id: '12350',
    userId: '54321',
    userName: 'dennis',
    title: 'An Art Event 6',
    venue: 'A Gallery 6',
    eventDate: '1682382828',
    websiteUrl: 'eventWeb@web.com',
    contactInfo: 'user@user.com',
    description: 'Art description here 3',
    imageUrl: 'https://ca1-newcastle-gateshead.dccdn.net/assets/images/business-directory/Business-Categories/Things-To-Do/_1200x630_crop_center-center_82_none/Art-Gallery_-Laing-secondary.jpg?v=1639505004',
  },
  {
    id: '12351',
    userId: '54321',
    userName: 'dennis',
    title: 'An Art Event 7',
    venue: 'A Gallery 7',
    eventDate: '1682382828',
    websiteUrl: 'eventWeb@web.com',
    contactInfo: 'user@user.com',
    description: 'Art description here 3',
    imageUrl: 'https://www.wearegoldcoast.com.au/wp-content/uploads/2021/05/Dust-Temple22-1.jpg',
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

const Stack = createNativeStackNavigator();

// //pressable test
// const pressTestFunc = () => {
//   console.log('pressed pressable');
// }

const CreatePressable = styled.Pressable`
  position: absolute;
  width: 41px;
  top: 5px;
  right: 10px;
`;

const FlatListWrapper = styled.FlatList`
  margin-top: 42px;
`;

const EventsList = ({ navigation }) => {
  const [eData, setEData] = useState([]);

  useEffect(() => {
    getAllEvents()
      .then((fsData) => {
        setEData(fsData);
      })
      .catch((err) => {
        console.log('Error initializing art event data:', err);
      })
  }, []);

  const updateEvents = (newEvent) => {
    setEData([...eData, newEvent]);
  }

  const getUpdatedEvents = (() => {
    console.log('calling get Updated events');
    getAllEvents()
    .then((fsData) => {
      setEData(fsData);
    })
    .catch((err) => {
      console.log('Error getting art event data:', err);
    })
  })

  const renderEvent = ({ item }) => (
    <Event eventData={item} navigation={navigation} getUpdatedEvents={getUpdatedEvents}/>
  );



  return (
    <View>
      <CreatePressable
        // title="Create Event"
        onPress={() => navigation.navigate('CreateEvent', {
          updateEvents: updateEvents,
        })}
      >
        <FontAwesomeIcon
          icon={faCirclePlus}
          size={40}
          color='#034448'
          background-color='none'
          // style={styles.filterIcon}
          />
      </CreatePressable>
      <FlatListWrapper
        data={eData}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
      />
    </View>);
};

const Events = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsList" component={EventsList} />
      <Stack.Screen name="EventDescription" component={EventDescription} />
      <Stack.Screen name="EventCreation" component={EventCreation} />
      <Stack.Screen name="EventEdit" component={EventEdit} />
      <Stack.Screen name="UpdateEvent" component={UpdateEvent} />
    </Stack.Navigator>
  );
}

EventsList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Events;
