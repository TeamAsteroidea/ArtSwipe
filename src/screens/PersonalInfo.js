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
import { GenderPicker } from '../components/profile/ProfilePickers.js';

/*
First Name
Last Name
Username
Gender
Birthdate
Location
Email
Phone Number
*/

const PersonalInfo = ({ navigation }) => {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ genderId, setGenderId ] = useState('--');
  const [ birthdate, setBirthdate ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ number, setNumber ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      genderId: genderId,
      birthdate: birthdate,
      location: location,
      email: email,
      number: number,
    }

    console.log(formData)

  axios.post('/personalinformation', formData)
    .then(data => {
      console.log('Post success data: ', data);
    })
    .catch(err => {
      console.log('We were unable to process your submission: ', err);
    })

  navigation.navigate('Profile')
  }

  return (
    <View>
      <View>
        <Text>First Name</Text>
        <TextInput
          placeholder="Jane"
          onChangeText={setFirstName}
        />

        <Text>Last Name</Text>
        <TextInput
          placeholder="Smith"
          onChangeText={setLastName}
        />

        <Text>Username</Text>
        <TextInput
          placeholder="janesmith123"
          onChangeText={setUsername}
        />

        <Text>Gender Identity</Text>
        <GenderPicker
          selectedValue={genderId}
          onValueChange={(genderValue) =>
            setGenderId(genderValue)
          } />

        <Text>Birthdate</Text>
        <TextInput
          placeholder="MM / DD / YYYY"
          onChangeText={setBirthdate}
        />

        <Text>Location</Text>
        <TextInput
          placeholder="San Francisco"
          onChangeText={setLocation}
        />

        <Text>Email</Text>
        <TextInput
          placeholder="janesmith7@email.com"
          onChangeText={setEmail}
        />

        <Text>Phone Number</Text>
        <TextInput
          placeholder="555-555-1234"
          onChangeText={setNumber}
        />

        <Button
          onPress={handleSubmit}
          title="Save Changes"
        />
      </View>
    </View>);
};

PersonalInfo.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PersonalInfo;