import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigator from '../src/Navigators/LoginStackNavigator';

import '../global.css';

const App = () => {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
    </NavigationContainer>
  );
};

export default App;
