import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

function Timer ({ remainingTime }) {
  const convertTime = () => {
    const date = new Date(remainingTime);

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();

    return (`${hour}h ${minutes}m ${seconds}s`);
  }

  return (
    <Time>{convertTime()}</Time>
  )
}


Timer.propTypes = {
  remainingTime: PropTypes.number.isRequired
};


export default Timer;

const Time = styled.Text`
  font-weight: bold;
`