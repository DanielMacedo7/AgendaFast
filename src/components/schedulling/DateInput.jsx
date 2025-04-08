import React, { useState } from 'react';
import { Platform, View, StyleSheet, Pressable, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateInput({ date, onChange }) {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const handleWebChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (!isNaN(selectedDate)) {
      onChange(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? (
        <input
          type="date"
          value={date.toISOString().split('T')[0]}
          onChange={handleWebChange}
          style={styles.webInput}
        />
      ) : (
        <>
          <Pressable onPress={showDatePicker}>
            <TextInput
              style={styles.inputDate}
              value={date.toLocaleDateString()}
              editable={false}
              pointerEvents="none"
            />
          </Pressable>

          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleChange}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputDate: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },
  webInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    width: 300
  },
});
