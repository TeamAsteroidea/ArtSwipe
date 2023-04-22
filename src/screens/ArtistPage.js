import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  // Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

const ArtistPage = (/* uncomment this section when starting navigation { navigation} */) => {
  return(
  <View>
    <Text>Pretend this is Arty Artersons profile</Text>
  </View>);
};

ArtistPage.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default ArtistPage