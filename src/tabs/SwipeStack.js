import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";
import Content from '../components/swipestack.index.jsx';
import data from '../../dummyData/artUrlArray.js'
import styled from 'styled-components/native';

const StyledImage = styled.Image`
width: 100px;
height: 100px;
`

const staticArtwork = data[7]

const SwipeStack = ({ navigation }) => {
  return (
    <View>
      <Content />
      <Button
        title="Pretend that this links to a detail page"
        onPress={() => navigation.navigate('DetailView')}
      />
      <StyledImage
        source={{
          uri: staticArtwork.image,
        }}
      />
      <Text>{staticArtwork.name}</Text>
      <Text>{staticArtwork.artist}</Text>
    </View>);
};

SwipeStack.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SwipeStack;