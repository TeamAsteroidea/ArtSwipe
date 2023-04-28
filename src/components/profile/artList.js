import * as React from "react";
import { useEffect, useState, setState } from "react";
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

const ArtList = ({ navigation, onCompleted }) => {

  const [ renderArt, setRenderArt ] = useState(true);

  // const items = useSelector((state) => {
  //   // return showCompleted ? state.images.completed : state.images.imagesArrayObj
  //   // if (onCompleted) {
  //   //   return state.user.activeBids.filter( bid => );
  //   // } else {
  //   //   return state.user.activeBids;
  //   // }

  //   if (onCompleted) {
  //     return state.images.completed;
  //   } else {
  //     return state.images.imagesArrayObj;
  //   }
  // })

  // useEffect(() => {
  //   if (items) {
  //     setRenderArt(true);
  //   }
  // },[items]);

  const renderItem = ({item}) => {

    return (
      <BookmarkCard itemID={item} navigation={navigation} />
    )
  };

  const items = [
    '00jnbbgfKgpExW7e4pVb',
    '01zCu8m2UyeLBEvzuxQe',
    '045Ye3pJpKHj2QcPMVbp',
    '08ZzS3RVds9HxciVtw3A',
  ]

  if (renderArt) {
    return(
      <View>
        <FlatList
          data={items}
          renderItem={renderItem}
          initialNumToRender={10}
          onEndReachedThreshold={0.2}
          scrollEventThrottle={16} />
      </View>);
  }
};

ArtList.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default ArtList