import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { setEventStart } from "../../redux/eventReducer";

const StartDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const { eventStart } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const options = {
      date: {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      time: {
        timeStyle: "short",
      },
    }

    const dateStr = date.toString();
    console.log(dateStr);
    dispatch(setEventStart(dateStr));
    const dateString = date.toLocaleString("en-US", options.date);
    const timeString = date.toLocaleString("en-US", options.time);
    console.log(dateString, timeString);
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

export default StartDatePicker;
