import * as React from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  View,
  Text,
  TextInput,
} from "react-native";
import axios from 'axios';
import { GenderPicker } from '../components/profile/ProfilePickers';
import styles from '../components/profile/profileFormsStyles';

const PersonalInfo = ({ navigation }) => {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ birthdate, setBirthdate ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ number, setNumber ] = useState('');
  const { genderId } = useSelector((state) => state.user);

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
      <View style={styles.formContainer}>
        <Text style={styles.labels}>First Name</Text>
        <TextInput
          placeholder="Jane"
          onChangeText={setFirstName}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Last Name</Text>
        <TextInput
          placeholder="Smith"
          onChangeText={setLastName}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Username</Text>
        <TextInput
          placeholder="janesmith123"
          onChangeText={setUsername}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Gender Identity</Text>
        <GenderPicker
          selectedValue={genderId}
          onValueChange={(genderValue) =>
            setGenderId(genderValue)
          } />

        <Text style={styles.labels}>Birthdate</Text>
        <TextInput
          placeholder="MM / DD / YYYY"
          onChangeText={setBirthdate}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Location</Text>
        <TextInput
          placeholder="San Francisco"
          onChangeText={setLocation}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Email</Text>
        <TextInput
          placeholder="janesmith7@email.com"
          onChangeText={setEmail}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Phone Number</Text>
        <TextInput
          placeholder="555-555-1234"
          onChangeText={setNumber}
          style={styles.textInput}
        />

        <Button
          onPress={handleSubmit}
          title="Save Changes"
          style={styles.button}
        />
      </View>
    </View>);
};

PersonalInfo.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PersonalInfo;