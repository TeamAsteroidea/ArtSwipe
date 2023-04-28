import * as React from "react";
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { store } from '/redux/store';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  // Alert,
  Image,
} from "react-native";

import Header from '../components/modular/Header';
import Option from '../components/profile/option';

const ProfileIcon = (<FontAwesome5 name="user-circle" size={40} color="#D2A93F"/>);
const BiddingIcon = (<FontAwesome5 name="gavel" size={40} color="#D2A93F"/>);
const BookmarkIcon = (<FontAwesome5 name="bookmark" size={40} color="#D2A93F" />);
const SettingsIcon = (<FontAwesome5 name="cogs" size={40} color="#D2A93F" light/>);

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
    // alignItems: 'center',
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
      <SafeAreaView style={ styles.container }>
        <Header navigation={navigation} title={"Profile"} />
        <View style={ styles.imageContainer }>
          <Image
            source={ ProfilePhoto }
            style={ styles.profilePicture }
            />
          <View style={ styles.optionsContainer }>
            <Option option={'Personal Information'} pageName={ 'PersonalInfo' } navigation={navigation} icon={ProfileIcon}></Option>
            <Option option={'Bidding History'} pageName={ 'BiddingHistory' } navigation={navigation} icon={BiddingIcon}></Option>
            <Option option={'Bookmarks'} pageName={ 'Bookmarks' } navigation={navigation} icon={BookmarkIcon}></Option>
            <Option option={'Settings'} pageName={ 'Settings' }navigation={navigation} icon={SettingsIcon}></Option>
          </View>
        </View>
      </SafeAreaView>
    );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Profile;