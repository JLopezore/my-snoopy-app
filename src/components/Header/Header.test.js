import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("react-router-dom");

describe("Header Component", () => {
  test("renders the logo and title", () => {
    render(<Header />);

    // Verificar que el logo y el título están presentes
    const logoImage = screen.getByAltText("Logo");
    const logoTitle = screen.getByText("Mi snoopy App");

    expect(logoImage).toBeInTheDocument();
    expect(logoTitle).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Header />);

    // Verificar que los enlaces de navegación están presentes
    const linkInicio = screen.getByText("Inicio");
    const linkTareas = screen.getByText("Tareas");
    const linkDirectorio = screen.getByText("Directorio");

    expect(linkInicio).toBeInTheDocument();
    expect(linkTareas).toBeInTheDocument();
    expect(linkDirectorio).toBeInTheDocument();
  });

  test("renders the ThemeSwitcher component", () => {
    render(<Header />);

    // Verificar que el componente ThemeSwitcher está presente
    const themeSwitcher = screen.getByTestId("theme-switcher");
    expect(themeSwitcher).toBeInTheDocument();
  });
});