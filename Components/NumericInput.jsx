import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";

function NumericInput({ setUserNumber }) {
    const handleInputChange = (text) => {
      if (/^\d+$/.test(text)) {
        setUserNumber(text);
      }
    };
    
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Enter Number of Athletes:</Text>
        <TextInput
          onChangeText={handleInputChange}
          keyboardType="numeric"
          returnKeyType="done"
          style={styles.input}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      width: 60,
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 10,
    },
  });
  
  export default NumericInput;