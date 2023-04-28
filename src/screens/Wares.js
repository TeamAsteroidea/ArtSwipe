import * as React from "react";
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  Pressable,
} from "react-native";
import styles from 'components/ArtistAlley/Styles';
import ArtworkTile from '../components/ArtistAlley/ArtworkTile';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { TopFade } from '../components/modular/TopFade';

const Wares = ({ route }) => {
  const { wares } = route.params;
  const navigation = useNavigation();

  const handlePress = () => {/* noop */ }

  const renderItem = ({ item: artwork }) => {
    // console.log('here: ', artwork)
    return (
      <View style={styles.artworkTileContainer}>
        <ArtworkTile artwork={artwork} handlePress={handlePress} />
      </View>
    )
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size={30} style={styles.backButtonIcon} />
          </Pressable>
        </View>
        <Text style={styles.headerArtistName}>{wares.artist}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.waresImages} id="myView">
          <TopFade offset={820} decay={1.5} />
          <FlatList
            initialNumToRender={6}
            data={wares.data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(artwork, index) => `${artwork.name}-${index}`}
            snapToAlignment={'start'}
            snapToInterval={styles.slide.width}
            decelerationRate='fast'
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            numColumns={2}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

Wares.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Wares