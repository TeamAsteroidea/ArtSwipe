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
import Content from '../components/swipestack.index.jsx';

const SwipeStack = ({ navigation }) => {
  return (
    <View>
      <Content />
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