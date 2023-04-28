import {
  StyleSheet
} from "react-native";
import Colors from "constants/Colors";

export default StyleSheet.create({
  formContainer: {
    margin: 30,
  },
  labels: {
    fontSize: 15,
    marginTop: 30,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 15,
    marginTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  button: {
    marginTop: 150,
    fontSize: 15,
    float: 'right',
    backgroundColor: Colors.GOLD,
    color: Colors.WHITE,
  },
  priceRange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceRangeInput: {
    width: 135,
    fontSize: 15,
    marginTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  }
});
