import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  // Text,
  // Alert,
} from "react-native";
import { user, artwork } from './data.js';
import { sortArtwork } from './helperFunctions/helperFunctions.js';

function Content () {
  const [stack, setStack] = useState(sortArtwork(user, artwork));

  return (
    <View>Place Holder</View>
  );
}

export default Content;
