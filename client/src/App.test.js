import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';

test("app renders without crashing!", () => {
  render(<App />);
});

test("switch to darkmode when the user toggled dark mode", async () => {
  const { getByTestId } = render(<Navbar />);

  const darkModeToggle = getByTestId(/dark-mode-toggle/i);
  fireEvent.click(darkModeToggle);

  expect(darkModeToggle.classList.contains('toggled')).toBe(true);
  expect(document.body.classList.contains('dark-mode')).toBe(true);
});
