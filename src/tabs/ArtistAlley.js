import React, { useState, memo } from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import Header from 'components/ArtistAlley/Header'
import styles from 'components/ArtistAlley/Styles';
import ArtistTile from "components/ArtistAlley/ArtistTile";
import FilterDropdown from "components/ArtistAlley/FilterDropdown";
import { TopFade } from 'components/modular/TopFade';

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



  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Option 1", "Option 2", "Option 3", "Option 1", "Option 2", "Option 3"];

  const handleOptionClick = (option) => {

    return;
  }

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
    handleOptionClick(option);
  };

  return (
    <SafeAreaView>
      <Header />
      <FilterDropdown showDropdown={showDropdown} setShowDropdown={setShowDropdown} selectedOption={selectedOption} />
      {showDropdown && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              style={{
                height: 45,
              }}
              key={index}
              onPress={() => handleOptionPress(option)}
              activeOpacity={0.8}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <SafeAreaView>
        <View style={styles.container}>
          <TopFade offset={830} decay={1.5} />
          <FlatList
            data={artistData}
            renderItem={({ item }) => <ArtistTile navigation={navigation} item={item} />}
            keyExtractor={extractArtistKey}
            initialNumToRender={10}
            onEndReachedThreshold={0.2}
            scrollEventThrottle={16}
          />
        </View >
      </SafeAreaView>
    </SafeAreaView>
  );
});

ArtistAlley.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArtistAlley;