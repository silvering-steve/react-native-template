import { render, screen, userEvent } from '@testing-library/react-native';
import React from 'react';
import WalletScreen from './WalletScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

describe('WalletScreen', () => {
  let mockNavigation;

  beforeEach(() => {
    mockNavigation = { replace: jest.fn(), navigate: jest.fn() };
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  describe('WalletDashboard', () => {
    it('should display the account balance, account phone number, and menu button when rendered', () => {
      render(<WalletScreen navigation={mockNavigation} />);

      const balanceText = screen.getByRole('text', { name: 'Balance' });
      const balanceAmountText = screen.getByRole('text', {
        name: 'Rp 100,000'
      });
      const phoneNumberText = screen.getByRole('text', {
        name: '081238161748'
      });
      const transferButton = screen.getByLabelText('transfer button');
      const cryptoButton = screen.getByLabelText('crypto button');

      expect(balanceText).toBeOnTheScreen();
      expect(balanceAmountText).toBeOnTheScreen();
      expect(phoneNumberText).toBeOnTheScreen();
      expect(transferButton).toBeOnTheScreen();
      expect(cryptoButton).toBeOnTheScreen();
    });

    describe('WalletMenu', () => {
      it('should invoke navigation.replace when pressing transfer button', async () => {
        const user = userEvent.setup();

        render(<WalletScreen navigation={mockNavigation} />);

        const transferButton = screen.getByLabelText('transfer button');
        await user.press(transferButton);

        expect(mockNavigation.replace).toHaveBeenCalledTimes(1);
        expect(mockNavigation.replace).toHaveBeenCalledWith('Transfer');
      });

      it('should invoke navigation.replace when pressing crypto button', async () => {
        const user = userEvent.setup();

        render(<WalletScreen navigation={mockNavigation} />);

        const cryptoButton = screen.getByLabelText('transaction button');
        await user.press(cryptoButton);

        expect(mockNavigation.replace).toHaveBeenCalledTimes(1);
        expect(mockNavigation.replace).toHaveBeenCalledWith('Transaction');
      });
    });
  });
});
