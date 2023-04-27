import {
  StyleSheet
} from "react-native";
import Colors from "constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGLIGHT,
  },
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 80,
    paddingHorizontal: 20,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: Colors.PRIMARYLIGHT,
  },
  filter: {
    alignSelf: "end",
    marginBottom: 15
  },
  filterIcon: {
    marginRight: 5,
  },
  filterDropdown: {
    position: "relative",
  },
  filterText: {
    textAlign: 'justify',
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  optionsContainer: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 5,
    padding: 10,
    zIndex: 999,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    paddingVertical: 5,
  },
});