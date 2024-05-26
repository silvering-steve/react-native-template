import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import DrawerHeader from './DrawerHeader';

describe('DrawerHeader', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should display bar button and the username in the header', () => {
    render(<DrawerHeader />);

    const helloText = screen.getByRole('text', { name: 'Hello,' });
    const usernameText = screen.getByRole('text', { name: 'Haruka Takashi' });
    const barButton = screen.getByLabelText('bar button');

    expect(helloText).toBeOnTheScreen();
    expect(usernameText).toBeOnTheScreen();
    expect(barButton).toBeOnTheScreen();
  });

  it('should invoke navigation toggleDrawer when user press drawer button', async () => {
    const user = userEvent.setup();
    const mockNavigation = { toggleDrawer: jest.fn() };

    render(<DrawerHeader navigation={mockNavigation} />);

    const barButton = screen.getByLabelText('bar button');

    await user.press(barButton);

    expect(mockNavigation.toggleDrawer).toHaveBeenCalledTimes(1);
  });
});
