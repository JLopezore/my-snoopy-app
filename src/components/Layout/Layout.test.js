import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

jest.mock("react-router-dom");

describe("Layout Component", () => {
  test("muestra Header y un Outlet simulado", () => {
    render(<Layout />);
    expect(screen.getByText(/Mi snoopy App/i)).toBeInTheDocument();
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });
});