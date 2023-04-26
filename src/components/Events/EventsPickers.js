import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const StartDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  let selectedDate = '';

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    selectedDate = date;
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      {/* {if (selectedDate !== '') {
        return (
          <Text>{selectedDate}</Text>
        )
      }} */}
      <Button title="Select start date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

    </View>
  );
};

export default StartDatePicker;
