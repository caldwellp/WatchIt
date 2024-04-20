import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NumericInput from './NumericInput';

const HomeScreen = ({ navigation }) => {
  const [userNumber, setUserNumber] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to WatchIt!</Text>
      <NumericInput style={styles.input} setUserNumber={setUserNumber} />
      <Button title="Time Athletes" onPress={() => navigation.navigate('AthleteNameList', {userNumber})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;