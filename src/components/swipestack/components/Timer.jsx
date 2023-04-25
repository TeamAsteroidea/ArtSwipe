import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

function Timer ({ remainingTime }) {
  const convertTime = () => {
    const date = new Date(remainingTime * 1000);

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();

    return (`${hour}h ${minutes}m ${seconds}s`);
  }

  return (
    <Text>{convertTime()}</Text>
  )
}


Timer.propTypes = {
  remainingTime: PropTypes.number.isRequired
};


export default Timer;