import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
  Image,
} from "react-native";

import Option from '../components/profile/option';

const ProfilePhoto = require('../../dummyData/dummy-profile-photo.jpeg');

const styles = StyleSheet.create({
  header: {
    color: 'gold',
    fontSize: 24,
  },
  container: {
    padding: 20,
    flex: 1,
    // backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  optionsContainer: {
    // backgroundColor: '#ADD8E6',
    flex: 2,
    justifyContent: 'center',
  }
});

const Profile = ({ navigation }) => {
  return (
      <View style={ styles.container }>
        <View style={ styles.imageContainer }>
          <Image
            source={ ProfilePhoto }
            style={ styles.profilePicture }
            />
          <View style={ styles.optionsContainer }>
            <Option option={'Personal Information'} pageName={ 'PersonalInfo' } navigation={navigation}></Option>
            <Option option={'Bidding History'} pageName={ 'BiddingHistory' } navigation={navigation}></Option>
            <Option option={'Bookmarks'} pageName={ 'Bookmarks' } navigation={navigation}></Option>
            <Option option={'Settings'} pageName={ 'Settings' }navigation={navigation}></Option>
            <Button
      title="Personal Info"
      onPress={() => navigation.navigate('PersonalInfo')}
    />
    <Button
      title="Profile Settings"
      onPress={() => navigation.navigate('ProfileSettings')}
    />
  </View>
        </View>
      </View>
    );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Profile;