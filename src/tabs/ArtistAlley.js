import * as React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

import {
  // StyleSheet,
  Button,
  ScrollView,
  View,
  Image,
  // SafeAreaView,
  Text,
  // Alert,
} from "react-native";

const ArtistAlley = ({ navigation }) => {
  const images = useSelector((state) => state.images.imagesArray);
  console.log(images[0])
  return (
    <ScrollView>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: images[0],
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <Text>Artist Alley will go here</Text>
      <Button
        title="Pretend this links to an artist"
        onPress={() => navigation.navigate('ArtistPage')}
      />

    </ScrollView>
  );
};




ArtistAlley.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArtistAlley;
