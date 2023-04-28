import {
  StyleSheet
} from "react-native";
import Colors from "constants/Colors";

export default StyleSheet.create({
  artDescription: {
    flex: 1,
    textAlign: "left",
    paddingVertical: 5,
    height: 65
  },
  artist: {
    display: 'flex',
    marginTop: '3%',
    marginBottom: '8%',
  },
  artistDescription: {
    paddingLeft: 5,
    paddingTop: 5,
  },
  artistDescriptionContainer: {
    margin: 5,
    padding: 5,
  },
  artistLocation: {
    fontWeight: '200',
    fontStyle: 'italic',
  },
  artistName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  artworkName: {
    textAlign: 'center',
    marginBottom: 5,
  },
  artworkTileContainer: {
    justifyContent: "space-around",
    width: "48%",
    marginTop: 20,
  },
  artImage: {
    flex: 1,
    width: 175,
    height: 175,
  },
  artImageContainer: {
    backgroundColor: 'lightgrey',
    width: 175,
    height: 175,
    flex: 1,
  },
  artName: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  artTile: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 3,
    overflow: 'hidden',
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonIcon: {
    marginRight: 10,
  },
  bidStartingPrice: {
    fontSize: 14,
  },
  container: {
  },
  contentContainerStyle: {
    justifyContent: 'center',
  },
  descriptionContainer: {
    // marginBottom: 200,
  },
  filter: {
    alignSelf: "flex-end",
  },
  filterContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 20,
  },
  filterDropdown: {
    position: "relative",
  },
  filterIcon: {
    marginRight: 5,
    paddingLeft: 5,
  },
  faText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.PRIMARY,
  },
  filterText: {
    fontSize: 16,
    color: Colors.PRIMARY,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
  },
  headerArtistName: {
    textAlign: "right",
    fontSize: 25,
    fontWeight: "600",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 35,
    marginTop: 5,
    paddingHorizontal: 20,
    color: '#FFFFFF'
  },
  image: {
    backgroundColor: 'lightgrey',
    resizeMode: 'cover',
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  materials: {
    fontSize: 12,
    fontWeight: '300',
    marginBottom: 5,
  },
  optionText: {
    padding: 6,
    marginTop: 5,
    marginLeft: 2,
    marginRight: 2,
    width: '100%',
    fontWeight: 500,
    fontSize: 16,
    color: "#333",
    paddingVertical: 5,
  },
  optionsContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 5,
    top: 120,
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
    width: '30%',
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
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.PRIMARY,
  },
});
