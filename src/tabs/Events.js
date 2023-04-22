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

const Events = ({ navigation }) => {
  return (
    <View>
      <Text>Events will go here</Text>
      <Button
        title="This is what a button that goes to another page looksk like"
        onPress={() => navigation.navigate('Example')}
      />
    </View>);
};

Events.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Events;