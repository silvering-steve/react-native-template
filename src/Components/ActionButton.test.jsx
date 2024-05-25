import React from 'react';
import {
  render,
  screen,
  userEvent,
  within
} from '@testing-library/react-native';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should display button with content and not disable', () => {
    const content = 'Submit';

    render(<ActionButton accessibilityLabel="button" content={content} />);

    const button = screen.getByLabelText('button');
    const contentElement = within(button).getByLabelText('content', {
      name: `${content}`
    });
    expect(contentElement).toBeOnTheScreen();
    expect(contentElement.props.className).toContain('text-white');
  });

  it('should display button with content and disable', () => {
    const content = 'Submit';

    render(
      <ActionButton
        accessibilityLabel="button"
        content={content}
        disabled={true}
      />
    );

    const button = screen.getByLabelText('button');
    const contentElement = within(button).getByLabelText('content', {
      name: `${content}`
    });
    expect(contentElement).toBeOnTheScreen();
    expect(contentElement.props.className).toContain('text-black');
  });

  it('should call handlerClick when clicked', async () => {
    const content = 'Submit';
    const mockOnPress = jest.fn();
    const user = userEvent.setup();

    render(
      <ActionButton
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
