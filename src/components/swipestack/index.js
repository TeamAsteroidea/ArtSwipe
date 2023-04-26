import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import { user, artwork } from './data.js';
import { View } from 'react-native';
import { sortArtwork } from './helperFunctions/sortHelperFunctions.js';
import Display from './Display.jsx';
import { useSelector } from "react-redux";
// import styled from 'styled-components/native';


function Content ({ navigation }) {
  const imageObjs = useSelector((state) => state.images.imagesArrayObj);
  const [stack] = useState(sortArtwork(user, imageObjs));

  return (
    <View>
      <Display stack={stack} user={user} navigation={navigation}/>
    </View>
  );
}

export default Content;
