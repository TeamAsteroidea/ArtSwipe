import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  // Text,
  // Alert,
} from "react-native";
import Content from '../components/swipestack/index.js';

const SwipeStack = () => {
  return (
    <View>
      <Content />
    </View>);
};

SwipeStack.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SwipeStack;