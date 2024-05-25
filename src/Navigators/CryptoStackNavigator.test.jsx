import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';

import CryptoStackNavigator from './CryptoStackNavigator';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));
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

describe('CryptoStackNavigator', () => {
  it('should change page to Market screen when user press market button', async () => {
    const user = userEvent.setup();

    render(
      <NavigationContainer>
        <CryptoStackNavigator />
      </NavigationContainer>
    );

    const marketButton = screen.getByLabelText('market button');
    await user.press(marketButton);

    const marketText = await screen.findByRole('text', 'Market');
    expect(marketText).toBeOnTheScreen();
  });

  it('should change page to Portofolio screen when user press portofolio button', async () => {
    const user = userEvent.setup();

    render(
      <NavigationContainer>
        <CryptoStackNavigator />
      </NavigationContainer>
    );

    const portofolioButton = screen.getByLabelText('portofolio button');
    await user.press(portofolioButton);

    const portofolioText = await screen.findByRole('text', 'Portofolio');
    expect(portofolioText).toBeOnTheScreen();
  });
});
