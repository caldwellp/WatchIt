import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TimerScreen = () => {
  const route = useRoute();
  const inputValues = route.params?.inputValues || '';
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [splitTimes, setSplitTimes] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10); // Update every 10 milliseconds
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, elapsedTime]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setSplitTimes([]);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleSplit = () => {
    setSplitTimes((prevSplits) => [...prevSplits, elapsedTime]);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const mseconds = Math.floor((milliseconds % 1000) / 10); // Keep milliseconds to two decimal places
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${mseconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  return (
     <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(elapsedTime)}</Text>
      <TouchableOpacity onPress={handleStartStop} style={styles.button}>
        <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.button}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSplit} style={styles.button}>
        <Text style={styles.buttonText}>Split</Text>
      </TouchableOpacity>
      <View style={styles.splitTimesContainer}>
        {splitTimes.map((split, index) => (
          <Text key={index} style={styles.splitTimeText}>
            Split {index + 1}: {formatTime(split)}
          </Text>
        ))}
      </View>
      {inputValues.map((value, index) => (
        <Text key={index}>{`Athlete ${index + 1}: ${value}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  splitTimesContainer: {
    marginTop: 20,
  },
  splitTimeText: {
    fontSize: 16,
  },
});

export default TimerScreen;