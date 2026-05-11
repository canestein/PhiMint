// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PhiMint title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PhiMint/i);
    expect(titleElement).toBeInTheDocument();
});
