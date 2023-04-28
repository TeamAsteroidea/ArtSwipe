import React from "react";
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

const SwipeStack = (function SwipeStack ({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header/>
      <View style={styles.container}>
        <Content navigation={navigation} />
      </View>
    </SafeAreaView>
  );
});

SwipeStack.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SwipeStack;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#034448',
  },
  container: {
    flex: 1,
    backgroundColor: '#232323'
  }
});