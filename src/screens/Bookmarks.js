import * as React from "react";
import { useState, setState } from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  Pressable,
  View,
  SafeAreaView,
  Text,
  // Alert,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import BookmarkList from '../components/profile/bookmarkList';
import SubHeader from '../components/modular/Subheader';

const Bookmarks = ({ navigation }) => {

  const [onCompleted, setOnCompleted] = useState(false);

  const showCompleted = () => {
    setOnCompleted(true);
  }

  const showPending = () => {
    setOnCompleted(false);
  }

  return(
  <SafeAreaView>
    <View>
      <View>
        <SubHeader navigation={ navigation } title={"Bookmarks"} />
      </View>
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
  </SafeAreaView>);
};

Bookmarks.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Bookmarks;