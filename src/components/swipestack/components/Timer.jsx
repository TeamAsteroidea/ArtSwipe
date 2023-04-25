import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  clock: {
    display: 'flex',
    position: 'absolute',
    width: '20%',
    height: '20%',
    top: 0,
    left: 0,
  }
}

function Timer ({ remainingTime }) {
  // console.log(remainingTime)
  const convertTime = () => {
    const date = new Date(remainingTime * 1000);

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();

    return (`${hour}h ${minutes}m ${seconds}s`);
  }

  return (
    <Text style={styles.clock}>{convertTime()}</Text>
  )
}


Timer.propTypes = {
  remainingTime: PropTypes.number.isRequired
};


export default Timer;