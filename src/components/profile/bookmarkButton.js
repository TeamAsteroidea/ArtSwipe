import * as React from 'react';
import { useState, setState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { addBookmark, removeBookmark } from "../../redux/userReducer.js";
import { update } from '../../server/fs-generic';


const BookmarkButton = ({ item }) => {

  // const [isClick, setClick] = useSelector(state => {
  //   // console.log('userstate', state.user.user);
  //   if (state.user.bookmarks.includes(artID)) {
  //     return false;
  //   }
  //   else return true;
  // });
  const dispatch = useDispatch();
    const userID = useSelector(state => state.user.uid)
    let bookmarks = useSelector( state => state.user.bookmarks)
    let initialState = bookmarks.includes(item.id);
    const [isLiked, setLiked] = useState(initialState);

  const toggleBookmark = () => {
// collectionName: users, data: id, {bookmarks: }

    if (isLiked) {
      // bookmarks.splice(bookmarks.indexOf(item.id), 1);
      // console.log(bookmarks, 'bookmarks spliced');
      // update("users", userID, {bookmarks: bookmarks})
      setLiked(!isLiked);
    } else {
      // update("users", userID, {bookmarks: bookmarks.push(item.id)})
      setLiked(!isLiked);
    }

  }

  return (
    <View>
      <Pressable onPress={toggleBookmark}>
        { isLiked ?
            <FontAwesome5
              name="bookmark"
              size={20}
              color="#D2A93F"
              solid
            /> :
            <FontAwesome5
              name="bookmark"
              size={20}
              color="#D2A93F"
            />
        }
      </Pressable>
    </View>
  );
}

export default BookmarkButton;