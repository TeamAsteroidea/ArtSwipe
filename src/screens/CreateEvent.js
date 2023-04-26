import * as React from "react";
import { useState } from "react";
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
import StartDatePicker from "../components/Events/EventsPickers.js"

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

const CreateEvent = ({ navigation }) => {
  const [ eventName, setEventName ] = useState('');
  const [ eventDescription, setEventDescription ] = useState('');
  const [ eventStart, setEventStart ] = useState('');
  const [ eventEnd, setEventEnd ] = useState('--');
  const [ eventAddress, setEventAddress ] = useState('');
  const [ eventCity, setEventCity ] = useState('');
  const [ eventState, setEventState ] = useState('');
  const [ eventZipCode, setEventZipCode ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      eventName: eventName,
      eventDescription: eventDescription,
      eventStart: eventStart,
      eventEnd: eventEnd,
      eventAddress: eventAddress,
      eventCity: eventCity,
      eventState: eventState,
      eventZipCode: eventZipCode,
    }

  axios.post('/createevent', formData)
    .then(data => {
      console.log('Post success data: ', data);
    })
    .catch(err => {
      console.log('We were unable to process your submission: ', err);
    })
  navigation.navigate('Events')
  }

  return (
    <View>
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
        <StartDatePicker
          onChangeText={setEventStart}
        />

        <Text>End Date</Text>
        <TextInput
          onChangeText={setEventEnd}
        />

        <Text>Street Address</Text>
        <TextInput
          placeholder="MM / DD / YYYY"
          onChangeText={setEventAddress}
        />

        <Text>City</Text>
        <TextInput
          placeholder="San Francisco"
          onChangeText={setEventCity}
        />

        <Text>State</Text>
        <TextInput
          placeholder="janesmith7@email.com"
          onChangeText={setEventState}
        />

        <Text>Zip Code</Text>
        <TextInput
          placeholder="555-555-1234"
          onChangeText={setEventZipCode}
        />

        <Button
          onPress={handleSubmit}
          title="Save Changes"
        />
      </View>
    </View>);
};

CreateEvent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CreateEvent;