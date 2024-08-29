/* eslint-disable no-undef */

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Users } from '../pages';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: 'Leanne',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
      ]),
  })
);

describe('Users Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders initial state correctly', () => {
    render(<Users />);

    expect(screen.getByText('Fetch Users')).toBeInTheDocument();
  });

  test('fetches users and displays them', async () => {
    render(<Users />);

    fireEvent.click(screen.getByText('Fetch Users'));

    await waitFor(() => {
      expect(screen.getByText('Leanne')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Fetch Users');
    });
  });

  test('displays loading spinner during fetch', async () => {
    render(<Users />);

    fireEvent.click(screen.getByText('Fetch Users'));

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test('displays error message when fetch fails', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Fetch error'))
    );

    render(<Users />);

    fireEvent.click(screen.getByText('Fetch Users'));

    await waitFor(() => {
      expect(screen.getByText('Error fetching users')).toBeInTheDocument();
    });
  });
});
