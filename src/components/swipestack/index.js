import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import { user, artwork } from './data.js';
import { View } from 'react-native';
import { sortArtwork } from './helperFunctions/sortHelperFunctions.js';
import Display from './Display.jsx';
// import styled from 'styled-components/native';

function Content () {
  const [stack] = useState(sortArtwork(user, artwork));

  return (
    <View>
        <Display stack={stack} user={user}/>
    </View>
  );
}

export default Content;