import { useState } from "react";
import * as React from "react";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  TextInput,
  // Alert,
} from "react-native";
// import axios from 'axios';
import StartDatePicker from "./EventsStartPicker.js"
import EndDatePicker from "./EventsEndPicker.js"
import { writeEvent } from '../../server/fs-events.js';

import styled from 'styled-components/native';

const CreateContainer = styled.View`
  margin-top: 60px;
`;

// dummy user
const dummyuserid = '12345';
const dummyusername = 'dennisTester';

const dbCol = 'events';

const UpdateEvent = ({ route, navigation }) => {
  const { updateEvents, editData } = route.params;
  console.log('editData', editData);

  const [ eventName, setEventName ] = useState(editData.title);
  const [ eventDescription, setEventDescription ] = useState(editData.description);
  const [ eventAddress, setEventAddress ] = useState('');
  const [ eventCity, setEventCity ] = useState('');
  const [ eventState, setEventState ] = useState('');
  const [ contactInfo, setContactInfo ] = useState(editData.contactinfo);
  const [ imageurl, setImageurl ] = useState(editData.imageurl);
  const [ websiteurl, setWebsiteurl ] = useState(editData.websiteurl);
  const { eventStart } = useSelector((state) => state.events);
  // const { eventEnd } = useSelector((state) => state.events);

  const eventStartUnix = Date.parse(eventStart);
  // const eventEndUnix = Date.parse(eventEnd);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: eventName,
      description: eventDescription,
      // eventdate: eventStartUnix,
      eventdate: Math.floor(Date.now() / 1000).toString(),
      venue: `${eventAddress}, ${eventCity}, ${eventState}`,
      contactinfo: contactInfo,
      imageurl: imageurl,
      websiteurl: websiteurl,
      userid: dummyuserid,
      username: dummyusername,
    }

    console.log(formData);
    // const newData = await writeEvent(dbCol, formData);
    // console.log('Wrote new Data', newData);
    // updateEvents(newData);

  navigation.navigate('Events')
  }

  return (
    <CreateContainer>
      <View>
        <Text>Event Name</Text>
        <TextInput
          placeholder="Patrick's Graduation"
          onChangeText={setEventName}
          value={eventName}
        />

        <Text>Description</Text>
        <TextInput
          placeholder="Write a description for your event"
          onChangeText={setEventDescription}
          value={eventDescription}
          multiline
          style={{borderWidth:1,padding:8}}
        />

        <Text>Start Date</Text>
        <StartDatePicker/>

        {/* <Text>End Date</Text>
        <EndDatePicker/> */}

        <Text>Street Address</Text>
        <TextInput
          placeholder="44 Tehama St"
          onChangeText={setEventAddress}
          value={eventAddress}
        />

        <Text>City</Text>
        <TextInput
          placeholder="San Francisco"
          onChangeText={setEventCity}
          value={eventCity}
        />

        <Text>State</Text>
        <TextInput
          placeholder="CA"
          onChangeText={setEventState}
          value={eventState}
        />

        <Text>Contact Info</Text>
        <TextInput
          placeholder="user@email.com"
          onChangeText={setContactInfo}
          value={contactInfo}
        />

        <Text>Website</Text>
        <TextInput
          placeholder="Insert website URL"
          onChangeText={setWebsiteurl}
          value={websiteurl}
        />

        <Text>Image</Text>
        <TextInput
          placeholder="Insert image URL"
          onChangeText={setImageurl}
          value={imageurl}
        />

        <Button
          onPress={handleSubmit}
          title="Save Changes"
        />
      </View>
    </CreateContainer>);
};

UpdateEvent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default UpdateEvent;