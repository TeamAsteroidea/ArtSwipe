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

const EventDescription = ({ route, navigation }) => {
  const { eventData } = route.params;
  const imgObj = {
    uri: eventData.imageUrl,
  };

  return (
    <View>
       {/* <Button
        title="Back to EventsList Button"
        onPress={() => navigation.navigate('EventsList')}
      /> */}
      <Button
        title="Event Edit Button"
        onPress={() => navigation.navigate('EventEdit', {
          eventData: eventData,
        })}
      />
      <Image
        style={{ width: '100%', height: 100 }}
        source={imgObj}
      />
      <Text>{eventData.eventDate}</Text>
      <Text>{eventData.title}</Text>
      <Text>{eventData.venue}</Text>
      <Text>{eventData.description}</Text>
      <Text>{eventData.contactInfo}</Text>

    </View>);
};

EventDescription.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default EventDescription;
