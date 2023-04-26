import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  // Button,
  View,
  SafeAreaView,
  // Text,
  // Alert,
} from "react-native";
import Content from '../components/swipestack/index';

const SwipeStack = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: '1'}}>
      <Content navigation={navigation}/>
    </SafeAreaView>);
};

SwipeStack.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SwipeStack;