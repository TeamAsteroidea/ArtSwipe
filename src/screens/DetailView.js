import * as React from "react";
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import {
  // StyleSheet,
  Button,
  View,
  FlatList,
  // SafeAreaView,
  Dimensions,
  ScrollView,
  Text,
  // Alert,
} from "react-native";
import styled from 'styled-components/native';
import data from '../../dummyData/artUrlArray.js'





const DetailView = ({ navigation, route }) => { //route.params.piece
  return (
  <SafeWrapper>
    <ScrollList contentContainerStyle={{ flexGrow: 1}}
    >
      <DetailViewImage
        source={{
          uri: data[1].image,
        }}
      />
      <Info>
        <Title>{data[1].name}</Title>
        <Artist>{data[1].artist}</Artist>
        <InfoSubtitle>About The Piece</InfoSubtitle>
        <Text>This piece was made of lorem ipsum in early 19XX during Artist’s chartruse period. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <InfoSubtitle>Materials and Method</InfoSubtitle>
        <Text>Oil on 20in by 20in canvas over charcoal sketch, really just beat the devil out of those oils. </Text>
        <InfoSubtitle>About the Artist</InfoSubtitle>
        <Text>How to use “and” 5 times in a row grammatically: A man owned a store called “This and That” and hired another man to make a sign for it. When the sign was finished, the owner inspected the work. He discovered that the spacing was wrong. So he said to the man, “The space between This and And and And and That is different. Please fix it.”</Text>
        <InfoSubtitle>About The Piece</InfoSubtitle>
        <Text>This piece was made of lorem ipsum in early 19XX during Artist’s chartruse period. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <InfoSubtitle>Materials and Method</InfoSubtitle>
        <Text>Oil on 20in by 20in canvas over charcoal sketch, really just beat the devil out of those oils. </Text>
        <InfoSubtitle>About the Artist</InfoSubtitle>
        <Text>How to use “and” 5 times in a row grammatically: A man owned a store called “This and That” and hired another man to make a sign for it. When the sign was finished, the owner inspected the work. He discovered that the spacing was wrong. So he said to the man, “The space between This and And and And and That is different. Please fix it.”</Text>
      </Info>
    </ScrollList>
  </SafeWrapper>
    );
};

DetailView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const SafeWrapper = styled.SafeAreaView`
  flex: 1;
`

const ScrollList = styled.ScrollView`
  flex: 1;
`

const DetailViewImage = styled.Image`
  height:${Dimensions.get('window').height * 0.45}px;
  width: ${Dimensions.get('window').width}px;
`
const Info = styled.View`
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;;
`

const Artist = styled.Text`
  font-style: italic;
  font-size: 15px;
`

const InfoSubtitle = styled.Text`
  font-weight: bold;
  font-size: 15px;
`



export default DetailView;

