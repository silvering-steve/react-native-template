import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('AppNavigator', () => {
  it('should change page to Login screen after Splash screen when user not logged in', async () => {
    render(
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    );

    const loginButton = await screen.findByLabelText('login button');

    expect(loginButton).toBeOnTheScreen();
  });
});
