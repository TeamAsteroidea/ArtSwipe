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

const Messages = ({ navigation }) => {
  return(
  <View>
    <Text>This is a static messages page asdf</Text>
    <Button
      title="This is what a button that goes to another page looksk like"
      onPress={() => navigation.navigate('Example')}
    />
  </View>);
};

Messages.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Messages;