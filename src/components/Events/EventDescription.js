import * as React from "react";
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
  Image,
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

const UpdatePressable = styled.Pressable`
  position: absolute;
  width: 41px;
  top: 10px;
  right: 10px;
`;

// position: absolute;
// width: 41px;
// top: 5px;
// right: 10px;

const DescView = styled.View`
  margin-top: 60px;
`;

const EventDescription = ({ route, navigation }) => {
  const { eventData, updateEvents } = route.params;
  const imgObj = {
    uri: eventData.imageurl,
  };

  return (
    <View>
       <UpdatePressable
        // title="Create Event"
        onPress={() => {
          navigation.navigate('UpdateEvent', {
            editData: eventData,
            updateEvents: updateEvents,
          })
        }}
      >
        <FontAwesomeIcon
          icon={faCirclePlus}
          size={40}
          color='#034448'
          background-color='none'
          // style={styles.filterIcon}
          />
      </UpdatePressable>
      <DescView>
        <Image
          style={{ width: '100%', height: 100 }}
          source={imgObj}
        />
        <Text>{eventData.eventDate}</Text>
        <Text>{eventData.title}</Text>
        <Text>{eventData.venue}</Text>
        <Text>{eventData.description}</Text>
        <Text>{eventData.contactInfo}</Text>
      </DescView>
    </View>);
};

EventDescription.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default EventDescription;
