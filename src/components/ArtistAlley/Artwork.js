import React, { memo } from "react";
import PropTypes from 'prop-types';
import styles from './Styles';

import {
  View,
  Image,
  Text,
  Pressable,
} from "react-native";

const Artwork = memo(function Artwork({ artwork, handlePress }) {
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.slide}>
        <Image
          source={{ uri: artwork.image }}
          style={styles.image}
        />
        <Text style={styles.artworkName}>{artwork.name}</Text>
      </View>
    </Pressable>
  );
});

Artwork.propTypes = {
  artwork: PropTypes.object.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default Artwork