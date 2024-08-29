import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import LoginPage from '@/app/(auth)/login/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Login Page', () => {
  it('authenticates user and redirects to dashboard on successful login', () => {
    const push = jest.fn();
    useRouter.mockReturnValue({
      push,
    });

    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText(/Username/i), {
      target: { value: 'user' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    expect(document.cookie).toContain('token=mock-jwt-token');
    expect(push).toHaveBeenCalledWith('/dashboard');
  });
});
