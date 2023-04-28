import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Header from 'components/ArtistAlley/Header'
import styles from 'components/ArtistAlley/Styles';
import ArtistTile from "components/ArtistAlley/ArtistTile";
import FilterDropdown from "../components/ArtistAlley/FilterDropdown";
import { Fade } from 'components/modular/Fade';
import { faClock, faStar, faMapMarkerAlt, faFire, faFilter } from '@fortawesome/free-solid-svg-icons';
import Colors from "constants/Colors";

const ArtistAlley = (function ArtistAlley({ navigation }) {
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

  const flatListRef = useRef(null);


  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(["Filter", faFilter]);
  const [currentList, setCurrentList] = useState(artistData);

  const options = [["Near Me", faMapMarkerAlt], ["Hot", faFire], ["Popular", faStar], ["New", faClock]];

  const handleOptionClick = (option) => {
    let sortedData = artistData;
    if (option[0] === "New") {
      sortedData = artistData.sort((a, b) => {
        const aDuration = a.data.reduce((acc, cur) => acc + cur.bidDuration, 0);
        const bDuration = b.data.reduce((acc, cur) => acc + cur.bidDuration, 0);
        return aDuration - bDuration;
      });
    }
    if (option[0] === "Hot") {
      sortedData = artistData;
    }
    if (option[0] === "Popular") {
      sortedData = artistData.sort((a, b) => {
        const aDataLength = a.data.length;
        const bDataLength = b.data.length;
        return bDataLength - aDataLength;
      });
    }
    if (option[0] === "Near Me") {
      sortedData = artistData.sort(() => Math.random() - 0.5);
    }
    setCurrentList(sortedData);
  }

  useEffect(() => {
    flatListRef.current.scrollToIndex({ index: 0, animated: true });
  }, [currentList])

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
                height: 38,
                backgroundColor: option[1] === selectedOption[1] ? Colors.INPUTS : "#fff",
                borderRadius: 5,
                overflow: "hidden"
              }}
              key={index}
              onPress={() => handleOptionPress(option)}
              activeOpacity={0.8}
            >
              <Text style={{
                ...styles.optionText,
                color: option[1] === selectedOption[1] ? Colors.PRIMARY : "#333"
              }}>
                {option[0]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <SafeAreaView>
        <View style={styles.container}>
          <Fade offset={820} decay={1.9} />
          <FlatList
            ref={flatListRef}
            data={currentList}
            renderItem={({ item }) => <ArtistTile navigation={navigation} item={item} />}
            keyExtractor={extractArtistKey}
            initialNumToRender={2}
            onEndReachedThreshold={0.2}
            minHeight={Dimensions.get('window').height}
            snapToAlignment={'center'}
            snapToInterval={390}
            decelerationRate={0.75}
            scrollEventThrottle={16}
          />
          <Fade offset={815} decay={1.3} direction={'Up'} position={609} />
        </View >
      </SafeAreaView>
    </SafeAreaView>
  );
});

ArtistAlley.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArtistAlley;