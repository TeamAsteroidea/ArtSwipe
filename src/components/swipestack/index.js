import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { store } from '/redux/store';
import { user } from './data.js';
import { View } from 'react-native';
import { sortArtwork } from './helperFunctions/sortHelperFunctions.js';
import Display from './Display.jsx';
import styled from 'styled-components/native';
import { useSelector } from "react-redux";
import { search } from '../../server/fs-generic.js';
import { orderBy, limit, where } from "firebase/firestore";

function Content ({ navigation }) {
  // const artwork = getAll('art')
  // const artwork = useSelector((state) => state.images.imagesArrayObj);
  // const sortedArtwork = sortArtwork(user, artwork)
  const [stack, setStack] = useState([]);

  const loadCards = () => {
    search('art', limit(100))
      .then((result) => {
        const sortedArtwork = sortArtwork(user, result);
        setStack(sortedArtwork);
        console.log('card loaded')
      })
      .catch((err) => {console.log(err)})
  };

  useEffect(() => {
    loadCards();
  }, [])


  return (
    <Swiper style={{}}>
      {stack.length > 0 && <Display stack={stack} user={user} navigation={navigation} loadCards={loadCards}/>}
    </Swiper>
  );
}

export default Content;

const Swiper = styled.View`
  padding-top: 10px;
`