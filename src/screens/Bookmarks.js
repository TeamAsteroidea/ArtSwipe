import * as React from "react";
import { useState, setState } from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  Pressable,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

import BookmarkList from '../components/profile/bookmarkList';

const Bookmarks = ({ navigation }) => {

  const [onCompleted, setOnCompleted] = useState(false);

  const showCompleted = () => {
    setOnCompleted(true);
    console.log(onCompleted, 'showCompleted');
  }

  const showPending = () => {
    setOnCompleted(false);
    // console.log(showCompleted, 'showCompleted');
  }

  return(
  <View>
    <View>
      <Pressable title={'pending'} onPress={showPending}>
        <Text>Pending</Text>
      </Pressable>
      <Pressable title={'completed'} onPress={showCompleted}>
        <Text>Completed</Text>
      </Pressable>
    </View>
    <View>
      <BookmarkList navigation={navigation} onCompleted={onCompleted}/>
    </View>
  </View>);
};

Bookmarks.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Bookmarks;