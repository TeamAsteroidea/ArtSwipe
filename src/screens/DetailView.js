import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  ScrollView,
  Text,
  // Alert,
} from "react-native";
import styled from 'styled-components/native';
import data from '../../dummyData/artUrlArray.js'

const StyledImage = styled.Image`
flex: .603;
width: null;
height: null;
resizeMode: contain;
`

const StyledView = styled.View`
flex: 1;
background_color: red;
`

const staticArtwork = data[2069]

const DetailView = ({ navigation }) => {
  return (
  <>
    <StyledImage
      source={{
        uri: staticArtwork.image,
      }}
    />
    <StyledView>
      <Text>{staticArtwork.name}</Text>
      <Text>{staticArtwork.artist}</Text>
    </StyledView>

    {/* <View style={{flex:1}}/> */}
  </>
    );
};

DetailView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DetailView;


{/* <View>
<View style={{flex: 1, backgroundColor: 'red'}} />
<Text>This is a detail page</Text>
<View style={{flex: 1, backgroundColor: 'red'}} />
<StyledImage
  source={{
    uri: staticArtwork.image,
  }}
/>
<View>
  <Text>{staticArtwork.name}</Text>
  <Text>{staticArtwork.artist}</Text>
</View>
</View> */}