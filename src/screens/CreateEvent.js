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
import { writeEvent } from '../server/fs-events.js';


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


// dummy user
const dummyuserid = '12345';
const dummyusername = 'dennisTester';
const dbCol = 'events';

const CreateContainer = styled.View`
  marginHorizontal: 30px;
  marginTop: 60px;
`;

const Label = styled.Text`
  fontSize: 15pt;
  marginTop: 20px;
  marginBottom: 3px;
`;

const Input = styled.TextInput`
  fontSize: 15pt;
  marginTop: 5px;
  borderBottomWidth: 1px;
  borderBottomColor: '#000';
`;

const CreateEvent = ({ route, navigation }) => {
  const { updateEvents, editData } = route.params;
  const [ eventName, setEventName ] = useState('');
  const [ eventDescription, setEventDescription ] = useState('');
  const [ eventAddress, setEventAddress ] = useState('');
  const [ eventCity, setEventCity ] = useState('');
  const [ eventState, setEventState ] = useState('');
  const [ contactInfo, setContactInfo ] = useState('');
  const [ imageurl, setImageurl ] = useState('');
  const [ websiteurl, setWebsiteurl ] = useState('');
  const { eventStart } = useSelector((state) => state.events);

  // const { eventEnd } = useSelector((state) => state.events);

  const eventStartUnix = Date.parse(eventStart);
  // const eventEndUnix = Date.parse(eventEnd);
  // console.log('eventStart', eventStart);
  // console.log('eventStartUnix', eventStartUnix);

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
    const newData = await writeEvent(dbCol, formData);
    console.log('Wrote new Data', newData);
    updateEvents(newData);

  navigation.navigate('Events')
  }

  return (
    <CreateContainer>
      <View>
        <Label>Event Name</Label>
        <Input
          placeholder="Patrick's Graduation"
          onChangeText={setEventName}
          value={eventName}
        />

        <Label>Description</Label>
        <TextInput
          placeholder="Write a description for your event"
          onChangeText={setEventDescription}
          value={eventDescription}
          multiline
          style={{borderWidth:1,padding:8}}
        />

        {/* <Label>Start Date</Label> */}
        <StartDatePicker/>

        {/* <Label>End Date</Label>
        <EndDatePicker/> */}

        <Label>Street Address</Label>
        <Input
          placeholder="44 Tehama St"
          onChangeText={setEventAddress}
          value={eventAddress}
        />

        <Label>City</Label>
        <Input
          placeholder="San Francisco"
          onChangeText={setEventCity}
          value={eventCity}
        />

        <Label>State</Label>
        <Input
          placeholder="CA"
          onChangeText={setEventState}
          value={eventState}
        />

        <Label>Contact Info</Label>
        <Input
          placeholder="user@email.com"
          onChangeText={setContactInfo}
          value={contactInfo}
        />

        <Label>Website</Label>
        <Input
          placeholder="Insert website URL"
          onChangeText={setWebsiteurl}
          value={websiteurl}
        />

        <Label>Image</Label>
        <Input
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

  // return (
  //   <CreateContainer>
  //     <View>
  //       <Text>Event Name</Text>
  //       <TextInput
  //         placeholder="Patrick's Graduation"
  //         onChangeText={setEventName}
  //       />

  //       <Text>Description</Text>
  //       <TextInput
  //         placeholder="Write a description for your event"
  //         onChangeText={setEventDescription}
  //         multiline
  //         style={{borderWidth:1,padding:8}}
  //       />

  //       <Text>Start Date</Text>
  //       <StartDatePicker/>

  //       {/* <Text>End Date</Text>
  //       <EndDatePicker/> */}

  //       <Text>Street Address</Text>
  //       <TextInput
  //         placeholder="44 Tehama St"
  //         onChangeText={setEventAddress}
  //       />

  //       <Text>City</Text>
  //       <TextInput
  //         placeholder="San Francisco"
  //         onChangeText={setEventCity}
  //       />

  //       <Text>State</Text>
  //       <TextInput
  //         placeholder="CA"
  //         onChangeText={setEventState}
  //       />

  //       <Text>Contact Info</Text>
  //       <TextInput
  //         placeholder="user@email.com"
  //         onChangeText={setContactInfo}
  //       />

  //       <Text>Website</Text>
  //       <TextInput
  //         placeholder="Insert website URL"
  //         onChangeText={setWebsiteurl}
  //       />

  //       <Text>Image</Text>
  //       <TextInput
  //         placeholder="Insert image URL"
  //         onChangeText={setImageurl}
  //       />

  //       <Button
  //         onPress={handleSubmit}
  //         title="Save Changes"
  //       />
  //     </View>
  //   </CreateContainer>);
};

CreateEvent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CreateEvent;