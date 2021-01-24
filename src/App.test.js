import { render } from "@testing-library/react";
import App from "./App";

test("renders current count text", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/current count/i);
  expect(textElement).toBeInTheDocument();
});
