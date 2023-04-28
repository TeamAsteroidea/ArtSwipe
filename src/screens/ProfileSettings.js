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
import { DarkModePicker, LanguagePicker, ShowMePicker } from '../components/profile/ProfilePickers.js';

/*
Dark Mode
Language
Price Range
Payment
Exp. Date
Show Me
Location
Email
Phone Number
*/

const ProfileSettings = ({ navigation }) => {
  const [ darkMode, setDarkMode ] = useState('On');
  const [ language, setLanguage ] = useState('English (US)');
  const [ priceMin, setPriceMin ] = useState('');
  const [ priceMax, setPriceMax ] = useState('');
  const [ payMethod, setPayMethod ] = useState('');
  const [ payExp, setPayExp ] = useState('');
  const [ showMe, setShowMe ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      darkMode: darkMode,
      language: language,
      priceMin: priceMin,
      priceMax: priceMax,
      showMe: showMe,
    }

    console.log(formData)

  axios.post('/profilesettings', formData)
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
        <Text>Dark Mode</Text>
        <DarkModePicker
          selectedValue={darkMode}
          onValueChange={(modeVal) => setDarkMode(modeVal)}
        />

        <Text>Language</Text>
        <LanguagePicker
          selectedValue={language}
          onValueChange={(langVal) => setLanguage(langVal)}
        />

        <Text>Price Range</Text>
        <Text>$</Text>
        <TextInput
          placeholder="100"
          onChangeText={setPriceMin}
        />
        <Text>to</Text>
        <Text>$</Text>
        <TextInput
          placeholder="9000000"
          onChangeText={setPriceMax}
        />

        <Text>Payment Method</Text>
        <TextInput
          placeholder="Enter card number"
          onChangeText={setPayMethod}
        />

        <Text>Exp. Date</Text>
        <TextInput
          placeholder="MM/YY"
          onChangeText={setPayExp}
        />

        <Text>Show Me</Text>
        <ShowMePicker
          selectedValue={darkMode}
          onValueChange={(modeVal) => setDarkMode(modeVal)}
          placeholder="Type of artwork shown"
          onChangeText={setShowMe}
        />

        <Button
          title="Save Changes"
          onPress={handleSubmit}
        />
      </View>
    </View>);
};

ProfileSettings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileSettings;