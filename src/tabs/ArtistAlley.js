import React, { useState, Ref } from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

import {
  // StyleSheet,
  Button,
  ScrollView,
  View,
  Image,
  Text,
  // Alert,
} from "react-native";

const ArtistAlley = ({ navigation }) => {
  const imageObjs = useSelector((state) => state.images.imagesArrayObj);
  const [renderedImages, setRenderedImages] = useState([...imageObjs.slice(0, 10)]);

  return (
    <ScrollView>
      {renderedImages.length > 0 && renderedImages.map((imageObj) => {
        return (
          <View key={imageObj.id}>
            <Text>Some more text</Text>
            <Image
              source={{
                uri: imageObj.image,
              }}
              style={{ width: 200, height: 200 }}
            />
            <Button
              title="Pretend this links to an artist"
              onPress={() => navigation.navigate('ArtistPage')}
            />
          </View>
        );
      })}


    </ScrollView>
  );
};




ArtistAlley.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArtistAlley;
