import React from "react";
import PropTypes from 'prop-types';
import styles from './Styles';

import {
  View,
  Image,
  Text,
  Pressable,
} from "react-native";

const Artwork = (function Artwork({ artwork, handlePress }) {
  return (
    <View >
    <Pressable onPress={handlePress}>
      <View style={styles.slide}>
        <Image
          source={{ uri: artwork.image }}
          style={styles.image}
        />
        <Text style={styles.artworkName}>{artwork.name}</Text>
      </View>
    </Pressable>
    </View>
  );
});

Artwork.propTypes = {
  artwork: PropTypes.object.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default Artwork