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

import ArtList from '../components/profile/artList';
import SubHeader from '../components/modular/Subheader';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    height: 75,
    justifyContent: "space-around",
    alignItems: "center",
  }
})

const BiddingHistory = ({ navigation }) => {

  const [onCompleted, setOnCompleted] = useState(false);

  const showCompleted = () => {
    setOnCompleted(true);
    console.log(onCompleted, 'showCompleted');
  }

  const showPending = () => {
    setOnCompleted(false);
  }

  return(
  <SafeAreaView>
    <View>
      <View>
        <SubHeader navigation={ navigation } title={"Bidding History"} />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable title={'pending'} onPress={showPending}>
          <Text>Pending</Text>
        </Pressable>
        <Pressable title={'completed'} onPress={showCompleted}>
          <Text>Completed</Text>
        </Pressable>
      </View>
    </View>
    <View>
      <ArtList navigation={navigation} onCompleted={onCompleted}/>
    </View>
  </SafeAreaView>);
};

BiddingHistory.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BiddingHistory