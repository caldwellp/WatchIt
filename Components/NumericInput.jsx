import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-paper";

function NumericInput({ setUserNumber }) {
    const handleInputChange = (text) => {
      if (/^\d+$/.test(text)) {
        setUserNumber(text);
      }
    };
    
    return (
      <View>
        <Text>Enter Number of Athletes:</Text>
        <TextInput
          label="Type a number"
          onChangeText={handleInputChange}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>
    );
  }
  
  export default NumericInput;