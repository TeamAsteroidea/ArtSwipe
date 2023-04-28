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
import axios from 'axios';
import StartDatePicker from "../components/Events/EventsStartPicker.js"
import EndDatePicker from "../components/Events/EventsEndPicker.js"

import styled from 'styled-components/native';
/*
id (String)
userId (User who created Event) (String) (Should match Users Collection)
userName (String)
title (String)
venue (String)
eventDate (in seconds–String or Number?)
websiteUrl (String)
contactInfo email (string)
description (String)
shortDescription (Optional String ?)
imageUrl (String)
*/

const CreateContainer = styled.View`
  margin-top: 60px;
`;

// dummy user
const dummyuserid = '12345';
const dummyusername = 'dennisTester';

const CreateEvent = ({ route, navigation }) => {
  const [ eventName, setEventName ] = useState('');
  const [ eventDescription, setEventDescription ] = useState('');
  const [ eventAddress, setEventAddress ] = useState('');
  const [ eventCity, setEventCity ] = useState('');
  const [ eventState, setEventState ] = useState('');
  const [ contactInfo, setContactInfo ] = useState('');
  const [ imageurl, setImageurl ] = useState('');
  const [ websiteurl, setWebsiteurl ] = useState('');
  const { eventStart } = useSelector((state) => state.events);
  const {reduxState} = useSelector((state) => {
    console.log('state', Object.keys(state));
    console.log('events', state.events);
    return Object.keys(state);
  })
  // const { eventEnd } = useSelector((state) => state.events);

  const eventStartUnix = Date.parse(eventStart);
  // const eventEndUnix = Date.parse(eventEnd);
  // console.log('eventStart', eventStart);
  // console.log('eventStartUnix', eventStartUnix);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: eventName,
      description: eventDescription,
      eventdate: eventStartUnix,
      venue: `${eventAddress}, ${eventCity}, ${eventState}`,
      contactinfo: contactInfo,
      imageurl: imageurl,
      websiteurl: websiteurl,
      userid: dummyuserid,
      username: dummyusername,
    }

    console.log(formData);

  // axios.post('/createevent', formData)
  //   .then(data => {
  //     console.log('Post success data: ', data);
  //   })
  //   .catch(err => {
  //     console.log('We were unable to process your submission: ', err);
  //   })
  navigation.navigate('Events')
  }

  return (
    <CreateContainer>
      <View>
        <Text>Event Name</Text>
        <TextInput
          placeholder="Patrick's Graduation"
          onChangeText={setEventName}
        />

        <Text>Description</Text>
        <TextInput
          placeholder="Write a description for your event"
          onChangeText={setEventDescription}
          multiline
          style={{borderWidth:1,padding:8}}
        />

        <Text>Start Date</Text>
        <StartDatePicker/>

        <Text>End Date</Text>
        <EndDatePicker/>

        <Text>Street Address</Text>
        <TextInput
          placeholder="44 Tehama St"
          onChangeText={setEventAddress}
        />

        <Text>City</Text>
        <TextInput
          placeholder="San Francisco"
          onChangeText={setEventCity}
        />

        <Text>State</Text>
        <TextInput
          placeholder="CA"
          onChangeText={setEventState}
        />

        <Text>Contact Info</Text>
        <TextInput
          placeholder="user@email.com"
          onChangeText={setContactInfo}
        />

        <Text>Website</Text>
        <TextInput
          placeholder="Insert website URL"
          onChangeText={setWebsiteurl}
        />

        <Text>Image</Text>
        <TextInput
          placeholder="Insert image URL"
          onChangeText={setImageurl}
        />

        <Button
          onPress={handleSubmit}
          title="Save Changes"
        />
      </View>
    </CreateContainer>);
};

CreateEvent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CreateEvent;