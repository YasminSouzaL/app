import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './src/pages/login/index';
import Car from './src/pages/Steps/car';
import Payment from './src/pages/Steps/payment';
import Type from './src/pages/Steps/type';
import Home from './src/pages/Home';
import Tabel from './src/pages/tabel/tabel';
import Card from './src/pages/tabel/card';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Car" component={Car} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Tabel" component={Tabel} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
