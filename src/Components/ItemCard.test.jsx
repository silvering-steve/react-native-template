import React from 'react';
import {
  render,
  screen,
  userEvent,
  within
} from '@testing-library/react-native';
import ItemCard from './ItemCard';

describe('ItemCard', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should display image, title, content, subContent, and rightContent', () => {
    const imagePath = 'https://example.com/image.jpg';
    const title = 'Profile';
    const content = 'Ramdhan Firdaus Amelia';
    const subContent = '088218173671';
    const rightContent = 'Rp100.000';

    render(
      <ItemCard
        accessibilityLabel="card"
        imagePath={imagePath}
        title={title}
        content={content}
        subContent={subContent}
        rightContent={rightContent}
      />
    );

    const card = screen.getByLabelText('card');
    const imageElement = within(card).getByLabelText('image');
    const titleElement = within(card).getByLabelText('title', {
      name: `${title}`
    });
    const contentElement = within(card).getByLabelText('content', {
      name: `${content}`
    });
    const subContentElement = within(card).getByLabelText('sub content', {
      name: `${subContent}`
    });
    const rightContentElement = within(card).getByLabelText('right content', {
      name: `${rightContent}`
    });
    expect(imageElement).toBeOnTheScreen();
    expect(imageElement.props.source.uri).toBe(imagePath);
    expect(titleElement).toBeOnTheScreen();
    expect(contentElement).toBeOnTheScreen();
    expect(subContentElement).toBeOnTheScreen();
    expect(rightContentElement).toBeOnTheScreen();
  });

  it('should call handlerClick when clicked', async () => {
    const content = 'Ramdhan Firdaus Amelia';
    const mockOnPress = jest.fn();
    const user = userEvent.setup();

    render(
      <ItemCard
        accessibilityLabel="card"
        onPress={mockOnPress}
        content={content}
      />
    );

    const card = screen.getByLabelText('card');
    await user.press(card);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
