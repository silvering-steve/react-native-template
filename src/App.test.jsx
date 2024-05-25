import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';
import LoginStackNavigator from './Navigators/LoginStackNavigator';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));
jest.mock('./Navigators/LoginStackNavigator');
jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: jest.fn()
}));

describe('App', () => {
  it('should render AppNavigator', () => {
    render(<App />);

    expect(LoginStackNavigator).toHaveBeenCalledTimes(1);
  });
});
