import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';

import SplashScreen from './SplashScreen';

describe('SplashScreen', () => {
  let mockNavigation;

  beforeEach(() => {
    mockNavigation = { replace: jest.fn() };

    jest.clearAllMocks();
  });

  it('should show the Chipto text when rendered', () => {
    render(<SplashScreen navigation={mockNavigation} />);

    const chipText = screen.getByRole('text', { name: 'Chip' });
    const toText = screen.getByRole('text', { name: 'to' });

    expect(chipText).toBeOnTheScreen();
    expect(toText).toBeOnTheScreen();
  });

  it('should call navigation.replace', async () => {
    render(<SplashScreen navigation={mockNavigation} />);

    await waitFor(() => {
      expect(mockNavigation.replace).toHaveBeenCalledTimes(1);
    });
    expect(mockNavigation.replace).toHaveBeenCalledWith('Login');
  });
});
