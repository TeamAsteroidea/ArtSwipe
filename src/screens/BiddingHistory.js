import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  Pressable,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

import ArtList from '../components/profile/artList';

const BiddingHistory = ({ navigation }) => {


  return(
  <View>
    <View>
      <Pressable title={'pending'}>
        <Text>Pending</Text>
      </Pressable>
      <Pressable title={'pending'}>
        <Text>Completed</Text>
      </Pressable>
    </View>
    <View>
      <ArtList navigation={navigation}/>
    </View>
  </View>);
};

BiddingHistory.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BiddingHistory