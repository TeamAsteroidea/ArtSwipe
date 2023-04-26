import * as React from "react";
import { useState } from "react";
// import PropTypes from 'prop-types';
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
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';

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

const ProfileSettings = () => {
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
      payMethod: payMethod,
      payExp: payExp,
      showMe: showMe,
      location: location,
      email: email,
    }

  axios.post('/profilesettings', formData)
    .then(data => {
      console.log('Post success data: ', data);
    })
    .catch(err => {
      console.log('We were unable to process your submission: ', err);
    })
  }

  const ModePicker = () => {
    const [ modeValue, setModeValue ] = useState('');
    const data = [
        {key:'1', value:'On'},
        {key:'2', value:'Off'}
    ];
    return(
      <SelectList
          setSelected={(val) => setModeValue(val)}
          data={data}
          save="value"
          search={false}
          defaultOption={{key:'1', value:'On'}}
          boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
          dropdownStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
      />
    )
  };

  const LanguagePicker = () => {
    const [ langValue, setLangValue ] = useState('');
    const data = [
        {key:'1', value:'English (US)'},
        {key:'2', value:'Spanish'},
        {key:'3', value:'French'},
    ];
    return(
      <SelectList
          setSelected={(val) => setLangValue(val)}
          data={data}
          save="value"
          search={false}
          defaultOption={{key:'1', value:'English (US)'}}
          boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
          dropdownStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
      />
    )
  };

  const ShowMePicker = () => {
    const [ artTypeValue, setArtTypeValue ] = useState([]);
    const data = [
      {key:'1', value:'Paintings'},
      {key:'2', value:'Ceramics'},
      {key:'3', value:'Sculptures'},
      {key:'4', value:'Jewelry'},
      {key:'5', value:'Photography'},
      {key:'6', value:'Glass'},
      {key:'7', value:'Prints'},
      {key:'8', value:'Drawings & Illustrations'},
      {key:'9', value:'Sculptures'},
      {key:'10', value:'Fiber Arts'},
      {key:'11', value:'Paper Craft'},
    ];
    return(
      <MultipleSelectList
        setSelected={(val) => setArtTypeValue(val)}
        data={data}
        save="value"
        label="Categories"
        boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
        dropdownStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
      />
    )
  };

  return (
    <View>
      <View>
        <Text>Dark Mode</Text>
        <ModePicker
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

        <Button
          onPress={handleSubmit}
          title="Save Changes"
        />
      </View>
    </View>);
};

// PersonalInfo.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };

export default ProfileSettings;