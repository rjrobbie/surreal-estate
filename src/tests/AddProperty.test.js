import { render, screen } from '@testing-library/react';
import AddProperty from "../components/AddProperty";

xit('renders text in the browser', () => {
  render(<AddProperty />);
  const addPropertyElement = screen.getByText(/add property/i);
  expect(addPropertyElement).toBeInTheDocument();
});
