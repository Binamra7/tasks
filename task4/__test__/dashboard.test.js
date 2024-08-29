import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMockRouter } from 'next/router';
import DashboardPage from '@/app/dashboard/page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('Protected Dashboard Route', () => {
    it('redirects unauthenticated users to the login page', () => {
        const push = jest.fn();
        useRouter.mockReturnValue({
            push,
        });

        document.cookie = 'token=randomtoken'; // Clear token

        render(<DashboardPage />);

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()

        expect(screen.getByText(/Welcome to the Dashboard/i)).toBeInTheDocument();
        expect(push).toHaveBeenCalledWith('/login');
    });
});
