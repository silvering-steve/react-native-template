import React from 'react';
import {
  render,
  screen,
  userEvent,
  within
} from '@testing-library/react-native';
import TextInputWithIcon from './TextInputWithIcon';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

describe('TextInputWithIcon', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  it('should display text input', () => {
    const accessibilityLabel = 'email input';
    const placeholder = 'Email';
    const value = '';
    const mockHandleOnChange = jest.fn();

    render(
      <TextInputWithIcon
        icon={faEnvelope}
        accessibilityLabel={accessibilityLabel}
        placeholder={placeholder}
        value={value}
        onChange={mockHandleOnChange}
      />
    );

    const inputSet = screen.getByLabelText('input set');
    const inputElement = within(inputSet).getByLabelText(accessibilityLabel);
    expect(inputElement).toBeOnTheScreen();
  });

  it('should display password input and un-hide password when click icon eye', async () => {
    const accessibilityLabel = 'password input';
    const placeholder = 'Password';
    const value = '';
    const mockHandleOnChange = jest.fn();
    const user = userEvent.setup();

    render(
      <TextInputWithIcon
        icon={faEnvelope}
        accessibilityLabel={accessibilityLabel}
        placeholder={placeholder}
        value={value}
        onChange={mockHandleOnChange}
        secureTextEntry={true}
      />
    );

    const inputSet = screen.getByLabelText('input set');
    const inputElementBeforeClick =
      within(inputSet).getByLabelText(accessibilityLabel);
    expect(inputElementBeforeClick.props.secureTextEntry).toBe(true);

    const eyeIcon = within(inputSet).getByTestId('eye icon');
    await user.press(eyeIcon);

    const inputElementAfterClick =
      within(inputSet).getByLabelText(accessibilityLabel);
    expect(inputElementAfterClick.props.secureTextEntry).toBe(false);
  });

  it('should call handlerOnChange when change the input', async () => {
    const accessibilityLabel = 'email input';
    const placeholder = 'Email';
    const value = '';
    const mockHandleOnChange = jest.fn();
    const user = userEvent.setup();
    const newValue = 'new value';

    render(
      <TextInputWithIcon
        icon={faEnvelope}
        accessibilityLabel={accessibilityLabel}
        placeholder={placeholder}
        value={value}
        onChange={mockHandleOnChange}
      />
    );

    const inputSet = screen.getByLabelText('input set');
    const inputElement = within(inputSet).getByLabelText(accessibilityLabel);
    await user.type(inputElement, newValue);

    expect(mockHandleOnChange).toHaveBeenCalledTimes(newValue.length);
  });
});
