import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from '../components/MainMenu';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import AnimalDetail from '../components/AnimalDetail';
import NewAnimal from '../components/NewAnimal';

import { createTamagui,TamaguiProvider } from 'tamagui'
import defaultConfig from '@tamagui/config/v3'

const config = createTamagui(defaultConfig)

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <TamaguiProvider config={config}>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerShown: false,
          cardStyle: { marginTop: 100, width:'80%', alignSelf:'center'},
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="AnimalDetail" component={AnimalDetail} />
        <Stack.Screen name="NewAnimal" component={NewAnimal} />
      </Stack.Navigator>
    </TamaguiProvider>
  );
}