import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  timePickerContainer: {
    marginBottom: 20,
  },
  keenSlider: {
    width: 300,
    height: 60,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  confirmButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;

/*
const styles = StyleSheet.create({
  artist: {
    display: 'flex',
    // minHeight: 'fit-content',
    backgroundColor: 'grey',
    marginTop: 25,
    // marginBottom: -25,
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
  sliderContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  keenSlider: {
    minHeight: 200,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    // minHeight: 'fit-content',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  descriptionContainer: {
    margin: 5,
    padding: 5,
  },
});
*/
