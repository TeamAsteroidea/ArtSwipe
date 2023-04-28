import * as React from 'react';
import { useState, setState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { addBookmark, removeBookmark } from "../../redux/userReducer.js";
import { update } from '../../server/fs-generic';


const BookmarkButton = ({ item }) => {

  const dispatch = useDispatch();
  const userID = useSelector(state => state.user.uid)
  let bookmarks = useSelector( state => state.user.bookmarks)
  let initialState = bookmarks.includes(item._id);
  const [isLiked, setLiked] = useState(initialState);

  const toggleBookmark = () => {
// collectionName: users, data: id, {bookmarks: }

    if (isLiked) {
      update('art', item._id, { bookmarks: bookmarks.filter(bookmark => bookmark === item._id)})
        .then(() => console.log('bookmark removed'))
        .catch(err => console.log('error removing bookmark', err))
      setLiked(!isLiked);
    } else {
      update('art', item._id, { bookmarks: bookmarks.push(item._id)})
        .then(() => console.log('bookmark added'))
        .catch(err => console.log('error adding bookmark', err))
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