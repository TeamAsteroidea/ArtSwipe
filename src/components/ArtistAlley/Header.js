import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const FilterDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionClick = (option) => {

    return;

  }

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
    handleOptionClick(option);
  };

  return (
    <View style={styles.filterDropdown}>
      <TouchableOpacity
        onPress={() => setShowDropdown(!showDropdown)}
        activeOpacity={0.8}
      >
        <Text style={styles.filterText}>
          {selectedOption ? selectedOption : "Filter"}
        </Text>
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionPress(option)}
              activeOpacity={0.8}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Artist Alley</Text>
      <View style={styles.filter}>
        <FilterDropdown />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    fontWeight: "bold",
    color: "#333",
  },
  filter: {
    alignItems: "baseline",
  },
  filterDropdown: {
    position: "relative",
  },
  filterText: {
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

export default Header;
