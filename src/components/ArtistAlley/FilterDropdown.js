import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './Styles';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from "constants/Colors";

const FilterDropdown = memo(function FilterDropdown({ showDropdown, setShowDropdown, selectedOption }) {

  return (
    <View style={styles.filterContainer}>
      <View style={styles.filterDropdown}>
        <TouchableOpacity
          onPress={() => setShowDropdown(!showDropdown)}
          hitSlop={{ top: 100, bottom: 100, left: 50, right: 100 }}
          activeOpacity={0.8}
        >
          <Text style={styles.filterText}>
            < FontAwesomeIcon icon={selectedOption[1]} style={styles.filterIcon} color={Colors.PRIMARY} />
            <Text style={styles.faText}>{selectedOption[0]}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
});

FilterDropdown.propTypes = {
  showDropdown: PropTypes.bool.isRequired,
  setShowDropdown: PropTypes.func.isRequired,
  selectedOption: PropTypes.array.isRequired,
};

export default FilterDropdown;