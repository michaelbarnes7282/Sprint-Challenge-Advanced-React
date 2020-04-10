import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { act } from 'react-dom/test-utils'

beforeAll(() => {
  window.fetch = jest.fn();
})

test('renders navbar', () => {
  const { getByText } = render (<App />);
  const header = getByText(/player cards/i);
  expect(header).toBeInTheDocument()
})

test('renders cards', () => {
  const { getByTestId } = render(<App />);
  const cards = getByTestId("cardDiv")
  expect(cards).toBeInTheDocument();
})

it('renders dark mode and is clickable', async () => {
  const { getByTestId } = render(<App />)
  const darkMode = await getByTestId("dark");
  act(() => {
    fireEvent.click(darkMode)
  })
  const toggled = getByTestId('toggled')
  expect(toggled).toHaveClass('toggle')
})