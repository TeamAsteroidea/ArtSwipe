import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dateOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    const timeOptions = {
      timeStyle: "short",
    }

    const dateString = date.toLocaleString("en-US", dateOptions);
    const timeString = date.toLocaleString("en-US", timeOptions);
    setSelectedDate(`${dateString} @ ${timeString}`);
    hideDatePicker();
  };

  return (
    <View>
      {selectedDate !== null ? <Text>{selectedDate}</Text> : null }
      <Button title="Select date & time" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

    </View>
  );
};

export default DatePicker;
