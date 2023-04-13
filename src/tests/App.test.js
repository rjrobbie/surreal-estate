import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders text in the browser', () => {
  render(<App />);
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
