import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AthleteNames = ({ navigation }) => {
  const route = useRoute();
  const userNumber = route.params?.userNumber || '';
  return (
    <View>
      <Text>This is the AthleteNames</Text>
      <Text>{userNumber}</Text>
      <Button title="Enter Athletes" onPress={() => navigation.navigate('TimerScreen')} />
    </View>
  );
};

export default AthleteNames;
