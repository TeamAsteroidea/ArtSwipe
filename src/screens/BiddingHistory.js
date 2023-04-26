import * as React from "react";
import { useState, setState } from "react";
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

  const [showCompleted, setShowCompleted] = useState(false);

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
    console.log(showCompleted, 'showCompleted');
  }

  return(
  <View>
    <View>
      <Pressable title={'pending'} onPress={toggleShowCompleted}>
        <Text>Pending</Text>
      </Pressable>
      <Pressable title={'completed'} onPress={toggleShowCompleted}>
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