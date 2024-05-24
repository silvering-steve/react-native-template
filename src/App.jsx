import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from '../src/Navigators/LoginNavigator';

import '../global.css';

const App = () => {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};

export default App;
