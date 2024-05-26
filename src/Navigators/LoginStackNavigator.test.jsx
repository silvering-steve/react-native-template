import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';

import LoginStackNavigator from './LoginStackNavigator';

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: jest.fn()
}));
jest.mock('./AppDrawerNavigator');

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('LoginStackNavigator', () => {
  it('should change page to Login screen after Splash screen when user not logged in', async () => {
    render(
      <NavigationContainer>
        <LoginStackNavigator />
      </NavigationContainer>
    );

    const loginButton = await screen.findByLabelText('login button');

    expect(loginButton).toBeOnTheScreen();
  });

  it('should change page to Wallet screen after Login screen when user logged in successfully', async () => {
    const user = userEvent.setup();

    render(
      <NavigationContainer>
        <LoginStackNavigator />
      </NavigationContainer>
    );

    const loginButton = await screen.findByLabelText('login button');
    await user.press(loginButton);
  });
});
