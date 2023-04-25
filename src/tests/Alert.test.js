import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("<Alert />", () => {
  xit("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  xit("displays a success message", () => {
    const { getByText } = render(<Alert message="Success!" success />);
    expect(getByText(/Success/).textContent).toBe("Success!");
  });

  xit("does not render an error or a success message if the message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
