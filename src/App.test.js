import { render, screen } from '@testing-library/react';
import App from './App';

test('Testa se o autor mestre foi citado', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cespedes/i);
  expect(linkElement).toBeInTheDocument();
});
