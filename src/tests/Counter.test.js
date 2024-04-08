import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toHaveTextContent('0');
});

test('should render initial count with value of 0', () => {
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' });
  const decrementButton = screen.getByRole('button', { name: '-' });

  // First, increment the count to avoid going negative, unless negative is handled
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton); // Increment twice to test decrementing next

  fireEvent.click(decrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});
