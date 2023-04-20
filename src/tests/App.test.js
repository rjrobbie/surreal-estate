import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

xit("renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
