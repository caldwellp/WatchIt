import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import components
import HomeScreen from './Components/HomeScreen';
import AthleteNameList from './Components/AthleteNameList';
import TimerScreen from './Components/TimerScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'WatchIt' }} />
        <Stack.Screen name="AthleteNameList" component={AthleteNameList} options={{ title: 'Athletes' }}/>
        <Stack.Screen name="TimerScreen" component={TimerScreen} options={{ title: 'Timer' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;