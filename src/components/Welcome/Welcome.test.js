import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome Component", () => {
  test("renders developer message", () => {
    render(<Welcome nombre="Desarrollador" />);
    const message = screen.getByText(/eres un crack/i);
    expect(message).toBeInTheDocument();
  });

  test("renders generic message", () => {
    render(<Welcome nombre="Usuario" />);
    const message = screen.getByText(/Usuario/i);
    expect(message).toBeInTheDocument();
  });
});