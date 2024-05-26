import React from 'react';
import {
  render,
  screen,
  userEvent,
  within
} from '@testing-library/react-native';
import TransferCheckAccountScreen from './TransferCheckAccountScreen';

describe('TransferCheckAccountScreen', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should display input bank, input phone number, and button check', () => {
    render(<TransferCheckAccountScreen />);

    const inputBank = screen.getByLabelText('bank input');
    const inputPhoneNumber = screen.getByLabelText('phone input');
    const buttonCheck = screen.getByLabelText('check button');

    expect(inputBank).toBeOnTheScreen();
    expect(inputPhoneNumber).toBeOnTheScreen();
    expect(buttonCheck).toBeOnTheScreen();
  });

  it('should display userInfo when click button check', async () => {
    render(<TransferCheckAccountScreen />);
    const user = userEvent.setup();
    const mockUser = {
      image: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Samuel Suhi',
      phoneNumber: '088218173673'
    };

    const inputBank = screen.getByLabelText('bank input');
    const inputPhoneNumber = screen.getByLabelText('phone input');
    const buttonCheck = screen.getByLabelText('check button');
    await user.type(inputBank, 'SMBC');
    await user.type(inputPhoneNumber, '088218173673');
    await user.press(buttonCheck);

    const userInfoCard = screen.getByLabelText('user info card');
    const imageUser = within(userInfoCard).getByLabelText('image');
    const nameUser = within(userInfoCard).getByText(mockUser.name);
    const phoneNumberUser = within(userInfoCard).getByText(
      mockUser.phoneNumber
    );

    expect(userInfoCard).toBeOnTheScreen();
    expect(imageUser).toBeOnTheScreen();
    expect(imageUser.props.source.uri).toBe(mockUser.image);
    expect(nameUser).toBeOnTheScreen();
    expect(phoneNumberUser).toBeOnTheScreen();
  });

  it('should fill bank input with dropdown', async () => {
    render(<TransferCheckAccountScreen />);
    const user = userEvent.setup();

    const inputBank = screen.getByLabelText('bank input');
    await user.type(inputBank, 'SM');

    const dropDownSMBC = screen.getByText('SMBC');
    await user.press(dropDownSMBC);

    const inputBankAfterClick = screen.getByLabelText('bank input');

    expect(inputBankAfterClick.props.value).toBe('SMBC');
  });

  it('should navigate to TransferForm when click user', async () => {
    const navigation = {
      navigate: jest.fn()
    };
    render(<TransferCheckAccountScreen navigation={navigation} />);
    const user = userEvent.setup();

    const buttonCheck = screen.getByLabelText('check button');
    await user.press(buttonCheck);

    const userInfoCard = screen.getByLabelText('user info card');
    await user.press(userInfoCard);

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith('TransferForm');
  });
});
