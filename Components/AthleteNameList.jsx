import React from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AthleteNameList = ({ navigation }) => {
  const route = useRoute();
  const userNumber = route.params?.userNumber || '';
  const data = Array.from({ length: userNumber }, (_, index) => ({ key: String(index) }));

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        placeholder={`Athlete ${item.key}`}
        style={{ borderWidth: 1, padding: 10 }}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      <Button title="Enter Athletes" onPress={() => navigation.navigate('TimerScreen')} />
    </View>
  );
};

export default AthleteNameList;
