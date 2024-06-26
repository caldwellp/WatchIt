import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TimerScreen = () => {
  const route = useRoute();
  const inputValues = route.params?.inputValues || '';
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const initialAthletes = inputValues.map((value, index) => ({
    name: `Athlete ${index + 1}: ${value}`,
    splits: [],
  }));
  const [athletes, setAthletes] = useState(initialAthletes);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10); 
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
    
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const mseconds = Math.floor((milliseconds % 1000) / 10); 
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${mseconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  const handleAssignToAthlete = (athleteIndex) => {
    const selectedAthlete = athletes[athleteIndex];
    selectedAthlete.splits.push(elapsedTime);
    setAthletes([...athletes]);
  };

  const calculateIntervals = (splits) => {
    const intervals = [];
    if (splits[0] != null) {intervals.push(splits[0])}
    for (let i = 1; i < splits.length; i++) {
      const interval = splits[i] - splits[i - 1];
      intervals.push(interval);
    }
    return intervals;
  };

  return (
    <View style={styles.container}>
    <Text style={styles.timerText}>{formatTime(elapsedTime)}</Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={handleStartStop} style={styles.button}>
        <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.button}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.athleteList}>
        {athletes.map((athlete, index) => (
          <TouchableOpacity
            key={index}
            style={styles.athlete}
            onPress={() => handleAssignToAthlete(index)}
          >
            <Text style={styles.athleteName}>{athlete.name}</Text>
            <Text style={styles.athleteSplits}>
              Splits: {athlete.splits.map((split) => formatTime(split)).join(', ')}
            </Text>
            <Text style={styles.athleteIntervals}>
              Intervals: {calculateIntervals(athlete.splits).map((interval) => formatTime(interval)).join(', ')}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  buttonsContainer: {
    flexDirection: 'row', 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  splitTimeText: {
    fontSize: 16,
  },
  athleteList: {
    flex: 1,
    width: '100%',
  },
  athlete: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  athleteName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  athleteSplits: {
    fontSize: 16,
  },
  athleteIntervals: {
    fontSize: 14,
    color: '#888',
  },
});

export default TimerScreen;