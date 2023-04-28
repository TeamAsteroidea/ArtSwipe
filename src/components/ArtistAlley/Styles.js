import {
  StyleSheet
} from "react-native";
import Colors from "constants/Colors";

export default StyleSheet.create({
  container: {
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
  artistDescription: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  artistName: {
    fontWeight: 'bold',
    fontSize: 20,
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
  image: {
    backgroundColor: 'lightgrey',
    resizeMode: 'cover',
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  descriptionContainer: {
    marginBottom: 200,
  },
  artistDescriptionContainer: {
    margin: 5,
    padding: 5,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 60,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonIcon: {
    marginRight: 10,
  },
  headerArtistName: {
    textAlign: "right",
    fontSize: 25,
    fontWeight: "500",
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: Colors.PRIMARYLIGHT,
  },
  filter: {
    alignSelf: "flex-end",
  },
  filterDropdown: {
    position: "relative",
    marginTop: 25,
  },
  filterText: {
    textAlign: 'justify',
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  optionsContainer: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    elevation: 5,
    zIndex: 5,
    top: 130,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 5,
    marginTop: "auto",
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
    padding: 6,
  },
  optionText: {
    padding: 6,
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 2,
    marginRight: 2,
    borderColor: "#e3e3e3",
    borderRadius: 5,
    width: '100%',
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  artTile: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 3,
    overflow: 'hidden',
  },
  artImageContainer: {
    backgroundColor: 'lightgrey',
    width: 175,
    height: 175,
    flex: 1,
  },
  artImage: {
    flex: 1,
    width: 175,
    height: 175,
  },
  artDescription: {
    flex: 1,
    textAlign: "left",
    paddingVertical: 5,
    height: 65
  },
  artName: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  materials: {
    fontSize: 12,
    fontWeight: '300',
    marginBottom: 5,
  },
  bidStartingPrice: {
    fontSize: 14,
  },
  artworkTileContainer: {
    justifyContent: "space-around",
    width: "48%",
    marginTop: 20,
  },
  contentContainerStyle: {
    justifyContent: 'center',
  }
});
