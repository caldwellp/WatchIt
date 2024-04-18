import React, { useState } from 'react';
import { View, TextInput, FlatList, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AthleteNameList = ({ navigation }) => {
  const route = useRoute();
  const userNumber = route.params?.userNumber || '';

  const [inputValues, setInputValues] = useState(Array.from({ length: userNumber }, () => ''));

  const renderItem = ({ item, index }) => (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        placeholder={`Athlete ${item.key}`}
        placeholderTextColor="gray"
        style={{ borderWidth: 1, padding: 10, fontSize: 16, color: 'black' }}
        onChangeText={(text) => {
          const updatedValues = [...inputValues];
          updatedValues[index] = text;
          setInputValues(updatedValues);
        }}
        value={inputValues[index]} 
      />
    </View>
  );

  const handleEnterAthletes = () => {
    navigation.navigate('TimerScreen', { inputValues });
  };

  return (
    <View>
      <FlatList
        data={Array.from({ length: userNumber }, (_, index) => ({ key: String(index+1) }))}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      <Button title="Enter Athletes" onPress={handleEnterAthletes} />
    </View>
  );
};

export default AthleteNameList;