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
/* 
  Login
  - Home
    - Cadastrar pagamento
      - Volta pra home depois de cadastrado
    - Cadastrar viagem (opção somente para motoristas)
       - Vai pra uma tela que lista os passageiros que querem carona
    - Pegar carona (todos vêem essa opção)
      - Clicando nessa opção, vai para uma tela perguntando o destino
         - Vai pra tela de card, filtrada pelo destino
*/
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Car" component={Car} />
        <Stack.Screen name="Tabel" component={Tabel} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
