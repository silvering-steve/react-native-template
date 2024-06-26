import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import AppDrawerNavigator from './AppDrawerNavigator';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={AppDrawerNavigator} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
