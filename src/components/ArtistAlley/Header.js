import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';

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
        activeOpacity={0.8}F
      >
        <Text style={styles.filterText}>
        <FontAwesomeIcon icon={faFilter} style={styles.filterIcon} />
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

export default Header;
