import React, {  memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './Styles';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';

const FilterDropdown = memo(function FilterDropdown({showDropdown, setShowDropdown, selectedOption}) {


  return (
    <View style={styles.headerContainer}>
      <View style={styles.filterDropdown}>
        <TouchableOpacity
          onPress={() => setShowDropdown(!showDropdown)}
          activeOpacity={0.8}
        >
          <Text style={styles.filterText}>
            <FontAwesomeIcon icon={faFilter} style={styles.filterIcon} />
            {selectedOption ? selectedOption : "Filter"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

FilterDropdown.propTypes = {
  showDropdown: PropTypes.bool.isRequired,
  setShowDropdown: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default FilterDropdown;