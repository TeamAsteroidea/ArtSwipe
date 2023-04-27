import {
  StyleSheet
} from "react-native";

export default StyleSheet.create({
  artist: {
    display: 'flex',
    marginTop: '3%',
    marginBottom: '8%',
  },
  artworkName: {
    textAlign: 'center',
    marginBottom: 5,
  },
  artistDescription: {},
  artistName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artistLocation: {
    fontWeight: '200',
    fontStyle: 'italic',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    width: 300,
    height: 300,
  },
  images: {
    // paddingLeft: 20,
  },
  image: {
    resizeMode: 'cover',
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  descriptionContainer: {
    margin: 5,
    padding: 5,
  },
});