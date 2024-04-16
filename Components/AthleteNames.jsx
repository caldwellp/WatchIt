import React from 'react';
import { View, Text, Button } from 'react-native';

const AthleteNames = ({ navigation }) => {
  return (
    <View>
      <Text>This is the AthleteNames</Text>
      <Button title="Enter Athletes" onPress={() => navigation.navigate('TimerScreen')} />
    </View>
  );
};

export default AthleteNames;
