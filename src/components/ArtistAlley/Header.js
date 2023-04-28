import React from "react";
import { View, Text} from "react-native";
import styles from './Styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Artist Alley</Text>
    </View>
  );
}

export default Header;
