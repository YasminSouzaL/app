import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './src/pages/Login/index';
import Car from './src/pages/Steps/car';
import Payment from './src/pages/Steps/payment';
import Type from './src/pages/Steps/type';
import Home from './src/pages/Home';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Type" component={Type} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
