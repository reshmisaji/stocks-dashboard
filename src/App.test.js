import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard', () => {
  render(<App />);
  const dashBoard = screen.getByText(/dashboard/i);
  expect(dashBoard).toBeInTheDocument();
});
