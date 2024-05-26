import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';

import WalletStackNavigator from './WalletStackNavigator';

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

describe('WalletStackNavigator', () => {
  it('should change page to Transfer screen when user press transfer button', async () => {
    const user = userEvent.setup();

    render(
      <NavigationContainer>
        <WalletStackNavigator />
      </NavigationContainer>
    );

    const transferButton = screen.getByLabelText('transfer button');
    await user.press(transferButton);

    const transferText = await screen.findByRole('text', 'Transfer');
    expect(transferText).toBeOnTheScreen();
  });

  it('should change page to Transaction screen when user press transaction button', async () => {
    const user = userEvent.setup();

    render(
      <NavigationContainer>
        <WalletStackNavigator />
      </NavigationContainer>
    );

    const transactionButton = screen.getByLabelText('transaction button');
    await user.press(transactionButton);

    const transactionText = await screen.findByRole('text', 'Transaction');
    expect(transactionText).toBeOnTheScreen();
  });
});
