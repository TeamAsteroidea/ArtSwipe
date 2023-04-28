import * as React from "react";
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  Pressable,
  Dimensions
} from "react-native";
import styles from 'components/ArtistAlley/Styles';
import ArtworkTile from '../components/ArtistAlley/ArtworkTile';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { Fade } from '../components/modular/Fade';
import Colors from "constants/Colors";

const Wares = ({ route }) => {
  const { wares } = route.params;
  const navigation = useNavigation();

  const renderItem = ({ item: artwork }) => {
    // console.log('here: ', artwork)
    return (
      <View style={styles.artworkTileContainer}>
        <ArtworkTile artwork={artwork} handlePress={() => navigation.navigate('DetailView', {
                      card: artwork,
                    })} />
      </View>
    )
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon color={Colors.PRIMARY} icon={faAngleLeft} size={30} style={styles.backButtonIcon} />
          </Pressable>
        </View>
        <Text style={[styles.headerArtistName, {color: Colors.PRIMARY}]}>{wares.artist}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.waresImages} id="myView">
          <Fade offset={820} decay={1.9} position={0} />
          <FlatList
            initialNumToRender={3}
            data={wares.data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(artwork, index) => `${artwork.name}-${index}`}
            snapToAlignment={'center'}
            snapToInterval={styles.slide.width}
            decelerationRate={0.005}
            columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            numColumns={2}
            contentContainerStyle={styles.contentContainerStyle}
          />
          <Fade offset={700} decay={0.8} direction={'Up'} position={Dimensions.get('window').height - 200}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

Wares.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Wares