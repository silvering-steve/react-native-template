import React from 'react';
import { render, screen, within } from '@testing-library/react-native';
import UserInfoCard from './UserInfoCard';

describe('UserInfoCard', () => {
  it('should display title, balance, and phoneNumber', () => {
    const title = 'Profile';
    const phoneNumber = '088218173671';
    const balance = 'Rp100.000';

    render(
      <UserInfoCard
        accessibilityLabel="card"
        money={balance}
        title={title}
        phoneNumber={phoneNumber}
      />
    );

    const card = screen.getByLabelText('card');
    const titleElement = within(card).getByLabelText('title', {
      name: `${title}`
    });
    const moneyElement = within(card).getByLabelText('money', {
      name: `${balance}`
    });
    const phoneNumberElement = within(card).getByLabelText('phoneNumber', {
      name: `${phoneNumber}`
    });
    expect(titleElement).toBeOnTheScreen();
    expect(moneyElement).toBeOnTheScreen();
    expect(phoneNumberElement).toBeOnTheScreen();
  });
});
