import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

const ArtistAlley = ({ navigation}) => {
  return (
    <View>
      <Text>Artist Alley will go here</Text>
    <Button
        title="Pretend this links to an artist"
        onPress={() => navigation.navigate('ArtistPage')}
      />
    </View>);
};




ArtistAlley.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArtistAlley;
