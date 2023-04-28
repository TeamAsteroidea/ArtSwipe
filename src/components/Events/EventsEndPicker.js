import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { setEventEnd } from "../../redux/eventReducer";

const EndDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const { eventEnd } = useSelector((state) => state.events);
  const dispatch = useDispatch();

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

    const dateStr = date.toString();
    dispatch(setEventEnd(dateStr));
    const dateString = date.toLocaleString("en-US", dateOptions);
    const timeString = date.toLocaleString("en-US", timeOptions);
    setSelectedDate(`${dateString} @ ${timeString}`);
    hideDatePicker();
  };

  return (
    <View>
      {selectedDate !== '' ? <Text>{selectedDate}</Text> : '' }
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

export default EndDatePicker;
