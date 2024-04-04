/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import {DeveloperInfoProvider} from './context/useDeveloperInfo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <DeveloperInfoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ToDoList" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DeveloperInfoProvider>
  );
}

export default App;
