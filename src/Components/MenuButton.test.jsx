import React from 'react';
import {
  render,
  screen,
  userEvent,
  within
} from '@testing-library/react-native';
import MenuButton from './MenuButton';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}));

describe('ActionButton', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  it('should display button with content and not disable', () => {
    const content = 'Transfer';

    render(<MenuButton accessibilityLabel="button" content={content} />);

    const button = screen.getByLabelText('button');
    const contentElement = within(button).getByLabelText('content', {
      name: `${content}`
    });
    expect(contentElement).toBeOnTheScreen();
  });

  it('should call handlerClick when clicked', async () => {
    const content = 'Submit';
    const mockOnPress = jest.fn();
    const user = userEvent.setup();

    render(
      <MenuButton
        accessibilityLabel="button"
        onPress={mockOnPress}
        content={content}
      />
    );

    const button = screen.getByLabelText('button');
    await user.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});