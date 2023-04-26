import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { debounce } from 'lodash';

import {
  Button,
  View,
  Image,
  Text,
  FlatList,
} from "react-native";

const ArtistAlley = React.memo(function ArtistAlley({ navigation }) {
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
  const extractArtKey = (item) => item.id.toString();

  const renderArt = ({ item }) => {
    return (
      <View key={item.id}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>{item.name}</Text>
        <Button
          title="Pretend this links to an artist"
          onPress={() => navigation.navigate('ArtistPage')}
        />
      </View>
    );
  };

  const renderArtist = ({ item }) => {
    return (
      <View key={item.artist}>
        <FlatList
          horizontal={true}
          data={item.data}
          renderItem={renderArt}
          keyExtractor={extractArtKey}
          initialNumToRender={10}
          onEndReachedThreshold={0.2}
          // onEndReached={onBottom}
          // onScroll={handleScroll}
          scrollEventThrottle={16}
        />
        <Text style={{ fontWeight: 'bold' }}>{item.artist}</Text>
        <Text style={{ fontWeight: '200', fontStyle: 'italic' }}>{item.artist}'s Location</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={artistData}
      renderItem={renderArtist}
      keyExtractor={extractArtistKey}
      initialNumToRender={10}
      onEndReachedThreshold={0.2}
      // onEndReached={onBottom}
      // onScroll={handleScroll}
      scrollEventThrottle={16}
    />
  );
});

ArtistAlley.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArtistAlley;
