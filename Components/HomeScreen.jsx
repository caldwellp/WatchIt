import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to WatchIt!</Text>
      <Button title="Time Athletes" onPress={() => navigation.navigate('AthleteNames')} />
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
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default HomeScreen;