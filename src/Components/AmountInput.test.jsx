import React from 'react';
import {
  render,
  screen,
  userEvent,
  within
} from '@testing-library/react-native';
import AmountInput from './AmountInput';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

describe('AmountInput', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  it('should display text input', () => {
    const accessibilityLabel = 'balance input';
    const value = '';
    const mockHandleOnChange = jest.fn();

    render(
      <AmountInput
        accessibilityLabel={accessibilityLabel}
        value={value}
        onChange={mockHandleOnChange}
      />
    );

    const inputSet = screen.getByLabelText('input amount set');
    const inputElement = within(inputSet).getByLabelText(accessibilityLabel);
    expect(inputElement).toBeOnTheScreen();
  });

  it('should call handlerOnChange when change the input', async () => {
    const accessibilityLabel = 'balance input';
    const value = '';
    const mockHandleOnChange = jest.fn();
    const user = userEvent.setup();
    const newValue = '3.00';

    render(
      <AmountInput
        accessibilityLabel={accessibilityLabel}
        value={value}
        onChange={mockHandleOnChange}
      />
    );

    const inputSet = screen.getByLabelText('input amount set');
    const inputElement = within(inputSet).getByLabelText(accessibilityLabel);
    await user.type(inputElement, newValue);

    expect(mockHandleOnChange).toHaveBeenCalledTimes(newValue.length);
  });
});
