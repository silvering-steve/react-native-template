import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import DrawerContent from './DrawerContent';

jest.mock('@react-navigation/drawer', () => ({
  DrawerItemList: jest.fn()
}));

describe('DrawerContent', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should display the logout buttons', () => {
    render(<DrawerContent />);

    const barButton = screen.getByLabelText('logout button');

    expect(barButton).toBeOnTheScreen();
  });

  it('should invoke navigation replace to login screen when logout is pressed', async () => {
    const user = userEvent.setup();
    const mockNavigation = { replace: jest.fn() };

    render(<DrawerContent navigation={mockNavigation} />);

    const barButton = screen.getByLabelText('logout button');

    await user.press(barButton);

    expect(mockNavigation.replace).toHaveBeenCalledTimes(1);
    expect(mockNavigation.replace).toHaveBeenCalledWith('Login');
  });
});
