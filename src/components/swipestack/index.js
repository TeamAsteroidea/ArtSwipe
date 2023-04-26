import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import { user, artwork } from './data.js';
import { View } from 'react-native';
import { sortArtwork } from './helperFunctions/sortHelperFunctions.js';
import Display from './Display.jsx';
import styled from 'styled-components/native';

function Content ({ navigation }) {
  const [stack] = useState(sortArtwork(user, artwork));

  return (
    <Swiper style={{}}>
        <Display stack={stack} user={user} navigation={navigation}/>
    </Swiper>
  );
}

export default Content;

const Swiper = styled.View`
  padding-top: 10px;
`