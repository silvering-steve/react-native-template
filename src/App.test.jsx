import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';
import LoginNavigator from './Navigators/LoginNavigator';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));
jest.mock('./Navigators/LoginNavigator');

describe('App', () => {
  it('should render AppNavigator', () => {
    render(<App />);

    expect(LoginNavigator).toHaveBeenCalledTimes(1);
  });
});
