import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { Entypo } from '@expo/vector-icons';
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
  top: 0px;
  right: 0px;
`;


const DescView = styled.View`
  margin-top: 60px;
`;

const ViewContainer = styled.View`
  margin: 30px;
`;

const EventHeader1 = styled.Text`
  marginTop: 15px;
  font-size: 22pt;
  font-weight: 600;
`;

const EventHeader2 = styled.Text`
  marginTop: 20px;
  font-size: 18pt;
  font-weight: 600;
`;

const EventText = styled.Text`
  marginVertical: 5px;
  font-size: 16pt;
`;

const EventDescription = ({ route, navigation }) => {
  const { eventData, getUpdatedEvents } = route.params;
  const imgObj = {
    uri: eventData.imageurl,
  };

  const options = {
    date: {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    time: {
      timeStyle: "short",
    }
  }

  const dateString = (new Date(Number(eventData.eventdate)*1000)).toLocaleString("en-US", options.date);
  const timeString = (new Date(Number(eventData.eventdate)*1000)).toLocaleString("en-US", options.time);
  const eventDateTime = `${dateString} @ ${timeString}`;

  return (
    <ViewContainer>
      <UpdatePressable
        // title="Create Event"
        onPress={() => {
          navigation.navigate('UpdateEvent', {
            editData: eventData,
            getUpdatedEvents: getUpdatedEvents,
          })
        }}
      >
        <Entypo
          name="edit"
          icon={faCirclePlus}
          size={35}
          color='#D2A93F'
          background-color='#034448'
          // style={styles.filterIcon}
          />
      </UpdatePressable>
      <DescView>
        <Image
          style={{ width: '100%', height: 170 }}
          source={imgObj}
        />
        <EventHeader1>{eventDateTime}</EventHeader1>
        <EventHeader1>{eventData.title}</EventHeader1>
        <EventText>{eventData.venue}</EventText>
        <EventHeader2>Description</EventHeader2>
        <EventText>{eventData.description}</EventText>
        <EventText>{eventData.contactInfo}</EventText>
      </DescView>
    </ViewContainer>
  );
};

  // return (
  //   <View>
  //      <UpdatePressable
  //       // title="Create Event"
  //       onPress={() => {
  //         navigation.navigate('UpdateEvent', {
  //           editData: eventData,
  //           updateEvents: updateEvents,
  //         })
  //       }}
  //     >
  //       <FontAwesomeIcon
  //         icon={faCirclePlus}
  //         size={40}
  //         color='#034448'
  //         background-color='none'
  //         // style={styles.filterIcon}
  //         />
  //     </UpdatePressable>
  //     <DescView>
  //       <Image
  //         style={{ width: '100%', height: 100 }}
  //         source={imgObj}
  //       />
  //       <Text>{eventData.eventDate}</Text>
  //       <Text>{eventData.title}</Text>
  //       <Text>{eventData.venue}</Text>
  //       <Text>{eventData.description}</Text>
  //       <Text>{eventData.contactInfo}</Text>
  //     </DescView>
  //   </View>);
// };

EventDescription.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default EventDescription;
