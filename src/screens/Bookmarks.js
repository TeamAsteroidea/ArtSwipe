import * as React from "react";
import { useState, setState } from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  StyleSheet,
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

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    height: 75,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textBolded: {
    fontWeight: "bold",
  },
})

const Bookmarks = ({ navigation }) => {

  const userID = useSelector(state => state.user.uid)
  let bookmarks = useSelector( state => state.user.bookmarks)

  const [onSearch, setOnSearch] = useState(false);

  const showSearch = () => {
    setOnSearch(true);
  }

  const showAll = () => {
    setOnSearch(false);
  }

  return(
  <SafeAreaView>
    <View>
      <View>
        <SubHeader navigation={ navigation } title={"Bookmarks"} />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable title={'all'} onPress={showAll}>
          {/* <Text styles={onSearch ? null : styles.textBolded}>All</Text> */}
          { onSearch ? <Text>All</Text> : <Text style={styles.textBolded} >All</Text>}
        </Pressable>
        <Pressable title={'search'} onPress={showSearch}>
        { onSearch ? <Text style={styles.textBolded}>Search</Text> : <Text>Search</Text>}
        </Pressable>
      </View>
    </View>
    <View>
      <BookmarkList navigation={navigation} onCompleted={onSearch}/>
    </View>
  </SafeAreaView>);
};

Bookmarks.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Bookmarks;