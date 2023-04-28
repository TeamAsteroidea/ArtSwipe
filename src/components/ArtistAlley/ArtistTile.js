import React, { memo } from "react";
import PropTypes from 'prop-types';
import Artwork from './Artwork';
import styles from './Styles';

import {
  View,
  Text,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";

const ArtistTile = memo(function ArtistTile({ navigation, item }) {

  const handlePress = () => {
    // console.log(item)
    navigation.navigate('Wares', { wares: item });
  };

  const renderItem = ({ item: artwork }) => (
    <Artwork artwork={artwork} handlePress={handlePress} />
  );

  const displayCount = 4;

  const snapInterval = Dimensions.get('window').width * 0.030769230769231;
  return (
    <View style={styles.artist}>
      <View style={styles.images}>
        <FlatList
          initialNumToRender={2}
          data={item.data.slice(0, displayCount)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(artwork, index) => `${artwork.name}-${index}`}
          snapToAlignment={'start'}
          snapToInterval={styles.slide.width + snapInterval}
          decelerationRate='fast'
          contentContainerStyle={{ justifyContent: 'center' }}
        />
      </View>


      <Pressable onPress={handlePress}>
        <View style={styles.artistDescriptionContainer}>
          <View style={styles.artistDescription}>
            <Text style={styles.artistName}>{item.artist}</Text>
            <Text style={styles.artistLocation}>{item.artist}&apos;s Location</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
});

ArtistTile.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ArtistTile;
