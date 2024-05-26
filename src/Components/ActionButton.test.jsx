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

  it('should display primary button and not disable', () => {
    const content = 'Submit';

    render(<ActionButton accessibilityLabel="button" text={content} />);

    const button = screen.getByLabelText('button');
    const contentElement = within(button).getByLabelText('content', {
      name: `${content}`
    });
    expect(contentElement).toBeOnTheScreen();
    expect(contentElement.props.className).toContain('text-white');
  });

  it('should display secondary button with children', () => {
    const content = 'Submit';
    const children = jest.fn();

    render(
      <ActionButton accessibilityLabel="button" text={content} type="secondary">
        {children()}
      </ActionButton>
    );

    const button = screen.getByLabelText('button');
    const contentElement = within(button).getByLabelText('content', {
      name: `${content}`
    });
    expect(contentElement).toBeOnTheScreen();
    expect(contentElement.props.className).toContain('text-[#2253F6]');
    expect(children).toHaveBeenCalledTimes(1);
  });

  it('should display disable button', () => {
    const content = 'Submit';

    render(
      <ActionButton accessibilityLabel="button" text={content} type="disable" />
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
        text={content}
      />
    );

    const button = screen.getByLabelText('button');
    await user.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
