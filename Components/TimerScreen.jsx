import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TimerScreen = () => {
  const route = useRoute();
  const inputValues = route.params?.inputValues || '';
  return (
    <View>
      <Text>This is the TimerScreen</Text>
      {inputValues.map((value, index) => (
        <Text key={index}>{`Athlete ${index + 1}: ${value}`}</Text>
      ))}
    </View>
  );
};

export default TimerScreen;