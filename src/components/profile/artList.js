import * as React from "react";
import PropTypes from 'prop-types';
import { store } from '../../redux/store.js';
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

const ArtList = ({ navigation }) => {

  const items = useSelector((state) => state.images.imagesArrayObj)

  const renderItem = ({item}) => (<BookmarkCard item={item} navigation={navigation} />);

  return(
  <View>
    <FlatList data={items} renderItem={renderItem} />
  </View>);
};

ArtList.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default ArtList