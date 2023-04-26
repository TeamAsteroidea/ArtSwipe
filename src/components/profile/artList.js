import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '../../redux/store.js';
import { useSelector } from 'react-redux';
import {
  Button,
  FlatList,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

import BookmarkCard from './bookmarkCard';

const ArtList = ({ navigation, onCompleted }) => {

  const items = useSelector((state) => {
    // return showCompleted ? state.images.completed : state.images.imagesArrayObj
    if (onCompleted) {
      return state.images.completed;
    } else {
      return state.images.imagesArrayObj;
    }
  })

  const renderItem = ({item}) => (<BookmarkCard item={item} navigation={navigation} />);

  return(
  <View>
    <FlatList
      data={items}
      renderItem={renderItem}
      initialNumToRender={10}
      onEndReachedThreshold={0.2}
      scrollEventThrottle={16} />
  </View>);
};

ArtList.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default ArtList