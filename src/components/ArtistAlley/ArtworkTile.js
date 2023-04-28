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
    <View>
      <Pressable onPress={handlePress} style={styles.artTile} >

        <View style={styles.artImageContainer}>
          <Image
            source={{ uri: artwork.image }}
            style={styles.artImage}
          />
        </View>

        <View style={styles.artDescription}>
          <View>
            <Text style={styles.artName}>
              {artwork.name.length > 25 ? artwork.name.slice(0, 25) + "..." : artwork.name}
            </Text>

          </View>

          <View>
            {/* <Text style={styles.materials}>Material: {artwork.material}</Text> */}
            <Text style={styles.bidStartingPrice}>Starting bid: ${artwork.bidStartingPrice}</Text>
          </View>
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