import React, { useState } from 'react';
import { View, TextInput, FlatList, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AthleteNameList = ({ navigation }) => {
  const route = useRoute();
  const userNumber = route.params?.userNumber || '';

  const [data, setData] = useState(Array.from({ length: userNumber }, (_, index) => ({ key: String(index+1) })));
  const [textInputs, setTextInputs] = useState(Array.from({ length: userNumber }, () => ''));

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        placeholder={`Athlete ${item.key}`}
        placeholderTextColor="gray"
        style={{ borderWidth: 1, padding: 10, fontSize: 16, color: 'black' }}
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