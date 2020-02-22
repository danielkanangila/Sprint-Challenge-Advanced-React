import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import App from './App';
import Navbar from './components/Navbar';
import Players from './components/players/Players';

jest.mock('axios');

test("app renders without crashing!", () => {
  render(<App />);
});

test("switch to dark mode when the user toggled dark mode", async () => {
  const { getByTestId } = render(<Navbar />);

  const darkModeToggle = getByTestId(/dark-mode-toggle/i);
  fireEvent.click(darkModeToggle);

  expect(darkModeToggle.classList.contains('toggled')).toBe(true);
  expect(document.body.classList.contains('dark-mode')).toBe(true);
});

test("fetches and displays data", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        id: 150,
        name: 'Dan Foo',
        country: 'Bar',
        searches: 190,
      }
    ]
  });
  const { getByTestId } = render(<Players />);
  

  const cardElement = await waitForElement(() => getByTestId('resolved-payer-card'));
  
  expect(axiosMock.get).toHaveBeenCalledTimes(2);
  expect(cardElement).toHaveTextContent('Dan Foo');
});
