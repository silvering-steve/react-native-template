import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawerNavigator from './AppDrawerNavigator';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('AppDrawerNavigator', () => {
  it('should change page to Login screen after Splash screen when user not logged in', async () => {
    render(
      <NavigationContainer>
        <AppDrawerNavigator />
      </NavigationContainer>
    );

    fireEvent.press(screen.getByText('Wallet'));

    expect(screen.getByText('Balance')).toBeOnTheScreen();
  });
});
