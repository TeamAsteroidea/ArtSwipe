import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  StyleSheet,
  // Button,
  View,
  SafeAreaView,
  // Text,
  // Alert,
} from "react-native";
import Content from '../components/swipestack/index';
import Header from '../components/swipestack/components/Header.jsx';

const SwipeStack = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header/>
      <Content navigation={navigation} />
    </SafeAreaView>
  );
};

SwipeStack.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SwipeStack;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#232323',
  },
});