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

const SwipeStack = ({ navigation }) => {
  return (
    <View>
      <Text>Swipestack will go here</Text>
      <Button
        title="Pretend that this links to a detail page"
        onPress={() => navigation.navigate('Example')}
      />
    </View>);
};

SwipeStack.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SwipeStack;