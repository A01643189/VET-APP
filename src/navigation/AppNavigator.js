import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from '../components/MainMenu';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import AnimalDetail from '../components/AnimalDetail';
import NewAnimal from '../components/NewAnimal';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="AnimalDetail" component={AnimalDetail} />
      <Stack.Screen name="NewAnimal" component={NewAnimal} />
    </Stack.Navigator>
  );
}
