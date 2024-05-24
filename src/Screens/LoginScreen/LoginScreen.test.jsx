import React from 'react';
import { render, screen } from '@testing-library/react-native';

import LoginScreen from './LoginScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

describe('LoginScreen', () => {
  let mockNavigation;

  beforeEach(() => {
    mockNavigation = { replace: jest.fn() };

    jest.clearAllMocks();
  });

  it('should display the the Chipto, login text, login form and the login button when rendered', () => {
    render(<LoginScreen navigation={mockNavigation} />);

    const chipText = screen.getByRole('text', { name: 'Chip' });
    const toText = screen.getByRole('text', { name: 'to' });
    const loginText = screen.getByLabelText('login title');
    const emailInput = screen.getByLabelText('email input');
    const passwordInput = screen.getByLabelText('password input');
    const loginButton = screen.getByLabelText('login button');

    expect(chipText).toBeOnTheScreen();
    expect(toText).toBeOnTheScreen();
    expect(loginText).toBeOnTheScreen();
    expect(emailInput).toBeOnTheScreen();
    expect(passwordInput).toBeOnTheScreen();
    expect(loginButton).toBeOnTheScreen();
  });
});
