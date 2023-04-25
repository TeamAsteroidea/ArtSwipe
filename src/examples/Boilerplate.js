import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store'; This will need to be uncommented once Redux is more implemented most likely
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native"; // Just leaving this whole mess of imports, it seems like RN has a lot of prebuilt Components you can use to just wrap app stuff for yourself.

const Example = ({ navigation }) => {
  // view is the default container for keeping stuff in in React Naitive
  return (
  <View>
    <Text>just writing something </Text>
    <Button
      title="This is what a button that goes to another page looks like."
      onPress={() => navigation.navigate('Example')}
    />
  </View>);
};

Example.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Example;
