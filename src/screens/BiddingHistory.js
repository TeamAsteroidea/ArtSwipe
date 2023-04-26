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

  const [onCompleted, setOnCompleted] = useState(false);

  const showCompleted = () => {
    setOnCompleted(true);
    console.log(onCompleted, 'showCompleted');
  }

  const showPending = () => {
    setOnCompleted(false);
  }

  return(
  <View>
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Pressable title={'pending'} onPress={showPending}>
        <Text>Pending</Text>
      </Pressable>
      <Pressable title={'completed'} onPress={showCompleted}>
        <Text>Completed</Text>
      </Pressable>
    </View>
    <View>
      <ArtList navigation={navigation} onCompleted={onCompleted}/>
    </View>
  </View>);
};

BiddingHistory.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BiddingHistory