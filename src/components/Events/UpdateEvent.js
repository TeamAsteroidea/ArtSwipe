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
import { updateEvent } from '../../server/fs-events.js';

import styled from 'styled-components/native';

// dummy user
const dummyuserid = '12345';
const dummyusername = 'dennisTester';
const dbCol = 'events';

const CreateContainer = styled.View`
  marginHorizontal: 30px;
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



const UpdateEvent = ({ route, navigation }) => {
  const { getUpdatedEvents, editData } = route.params;
  // console.log('editData', editData);
  let addrArr = editData.venue.split(',');
  addrArr = addrArr.map((s) => s.trim());
  console.log('id', editData.id);

  const [ eventName, setEventName ] = useState(editData.title);
  const [ eventDescription, setEventDescription ] = useState(editData.description);
  const [ eventAddress, setEventAddress ] = useState(addrArr[0] || '');
  const [ eventCity, setEventCity ] = useState(addrArr[1] || '');
  const [ eventState, setEventState ] = useState(addrArr[2] || '');
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
    const newData = await updateEvent(dbCol, editData.id,formData);
    console.log('Update Data', newData);
    getUpdatedEvents(newData);

    navigation.navigate('EventDescription', {
      eventData: newData,
    });
  }

  // TODO ADD Date view to update container

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
  //         value={eventName}
  //       />

  //       <Text>Description</Text>
  //       <TextInput
  //         placeholder="Write a description for your event"
  //         onChangeText={setEventDescription}
  //         value={eventDescription}
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
  //         value={eventAddress}
  //       />

  //       <Text>City</Text>
  //       <TextInput
  //         placeholder="San Francisco"
  //         onChangeText={setEventCity}
  //         value={eventCity}
  //       />

  //       <Text>State</Text>
  //       <TextInput
  //         placeholder="CA"
  //         onChangeText={setEventState}
  //         value={eventState}
  //       />

  //       <Text>Contact Info</Text>
  //       <TextInput
  //         placeholder="user@email.com"
  //         onChangeText={setContactInfo}
  //         value={contactInfo}
  //       />

  //       <Text>Website</Text>
  //       <TextInput
  //         placeholder="Insert website URL"
  //         onChangeText={setWebsiteurl}
  //         value={websiteurl}
  //       />

  //       <Text>Image</Text>
  //       <TextInput
  //         placeholder="Insert image URL"
  //         onChangeText={setImageurl}
  //         value={imageurl}
  //       />

  //       <Button
  //         onPress={handleSubmit}
  //         title="Save Changes"
  //       />
  //     </View>
  //   </CreateContainer>);
};

UpdateEvent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default UpdateEvent;