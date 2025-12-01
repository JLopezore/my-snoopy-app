import { render, screen, waitFor } from "@testing-library/react";
import UserDirectory from "./UserDirectory";

describe("UserDirectory Component", () => {
  test("renders loading message", () => {
    render(<UserDirectory />);
    const loadingMessage = screen.getByText(/Cargando usuarios/i);
    expect(loadingMessage).toBeInTheDocument();
  });

  test("renders user list after loading", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: "John Doe", email: "john@example.com", website: "example.com" }]),
      })
    );

    render(<UserDirectory />);

    await waitFor(() => {
      const userName = screen.getByText(/John Doe/i);
      expect(userName).toBeInTheDocument();
    });
  });
});