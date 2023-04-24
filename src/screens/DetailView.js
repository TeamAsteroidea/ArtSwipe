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
import styled from 'styled-components/native';
import data from '../../dummyData/artUrlArray.js'

const StyledImage = styled.Image`
width: 300;
height: 300;
`

const staticArtwork = data[3]

const DetailView = ({ navigation }) => {
  return (
    <View>
      <Text>This is a detail page</Text>
      <StyledImage
        source={{
          uri: staticArtwork.image,
        }}
      />
      <Text>{staticArtwork.name}</Text>
      <Text>{staticArtwork.artist}</Text>
    </View>);
};

DetailView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DetailView;