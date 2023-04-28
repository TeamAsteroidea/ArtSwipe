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
import { DarkModePicker, LanguagePicker, ShowMePicker } from '../components/profile/ProfilePickers.js';
import styles from '../components/profile/profileFormsStyles';

const ProfileSettings = ({ navigation }) => {
  const [ priceMin, setPriceMin ] = useState('');
  const [ priceMax, setPriceMax ] = useState('');
  const [ payMethod, setPayMethod ] = useState('');
  const [ payExp, setPayExp ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ email, setEmail ] = useState('');
  const { darkMode } = useSelector((state) => state.user);
  const { language } = useSelector((state) => state.user);
  const { showMe } = useSelector((state) => state.user);

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
      <View style={styles.formContainer}>
        <Text style={styles.labels}>Dark Mode</Text>
        <DarkModePicker
          selectedValue={darkMode}
        />

        <Text style={styles.labels}>Language</Text>
        <LanguagePicker
          selectedValue={language}
        />

        <Text style={styles.labels}>Price Range</Text>
        <View style={styles.priceRange}>
          <Text>$ </Text>
          <TextInput
            placeholder="100"
            onChangeText={setPriceMin}
            style={styles.priceRangeInput}
          />
          <Text>&nbsp;&nbsp; to &nbsp;&nbsp;</Text>
          <Text>$ </Text>
          <TextInput
            placeholder="9,000,000"
            onChangeText={setPriceMax}
            style={styles.priceRangeInput}
          />
        </View>

        <Text style={styles.labels}>Payment Method</Text>
        <TextInput
          placeholder="Enter card number"
          onChangeText={setPayMethod}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Exp. Date</Text>
        <TextInput
          placeholder="MM/YY"
          onChangeText={setPayExp}
          style={styles.textInput}
        />

        <Text style={styles.labels}>Show Me</Text>
        <ShowMePicker
          selectedValue={showMe}
          placeholder="Type of artwork shown"
        />

        <Button
          title="Save Changes"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
    </View>);
};

ProfileSettings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileSettings;