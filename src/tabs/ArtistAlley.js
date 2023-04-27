import React, { memo } from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

import {
  View,
  FlatList,
  StyleSheet
} from "react-native";

import Colors from "constants/Colors";
import Header from 'components/ArtistAlley/Header'
import ArtistTile from "components/ArtistAlley/ArtistTile";

const ArtistAlley = memo(function ArtistAlley({ navigation }) {
  const imageObjs = useSelector((state) => state.images.imagesArrayObj);
  const artistObjs = imageObjs.reduce((acc, cur) => {
    const { artist } = cur;
    if (!acc[artist]) {
      acc[artist] = [cur];
    } else {
      acc[artist].push(cur);
    }
    return acc;
  }, {});

  const artistData = Object.entries(artistObjs).map(([artist, data]) => ({
    artist: artist,
    data,
  }));

  const extractArtistKey = (item) => item.artist.toString();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={artistData}
          renderItem={({ item }) => <ArtistTile navigation={navigation} item={item} />}
          keyExtractor={extractArtistKey}
          initialNumToRender={10}
          onEndReachedThreshold={0.2}
          scrollEventThrottle={16}
        />
      </View >
    </>
  );
});

ArtistAlley.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArtistAlley;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGLIGHT,
  },
});