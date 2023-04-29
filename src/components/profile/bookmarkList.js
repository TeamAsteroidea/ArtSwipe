import * as React from "react";
import { useEffect, useState, setState } from "react";
import PropTypes from 'prop-types';
import { store } from '../../redux/store.js';
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  FlatList,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

import BookmarkCard from './bookmarkCard';
import * as generic from 'src/server/fs-generic.js';

const BookmarkList = ({ navigation }) => {

  // const items = useSelector((state) => {
  //   // return showCompleted ? state.images.completed : state.images.imagesArrayObj
  //   return state.user.bookmarks;
  // })
  // const userID = useSelector(state => state.user.uid)
  // const userID = '03LMbElkmRD5Kw3mw3xA';
  // const [items, setItems] = useState(null);
  // const [ renderArt, setRenderArt ] = useState(false);

  // useEffect(() => {

  //   generic.getOne('users', userID).then((results) => {
  //     setItems(results.bookmarks)})
  //     .catch(err => console.log('error retrieving bookmarks', err))
  // // }, [userID]);
  //   },[]);

  // useEffect(() => {
  //   if (items) {
  //     setRenderArt(true);
  //   }
  // },[items]);

  const [ renderArt, setRenderArt ] = useState(true);

  const items = [
    '00jnbbgfKgpExW7e4pVb',
    '01zCu8m2UyeLBEvzuxQe',
    '045Ye3pJpKHj2QcPMVbp',
    '08ZzS3RVds9HxciVtw3A',
  ]

  const renderItem = ({item}) => {
    return (
      <BookmarkCard itemID={item} navigation={navigation} />
    )
  };

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

BookmarkList.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BookmarkList