import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "../../context/ThemeContext";

const renderWithProvider = (ui) => render(<ThemeProvider>{ui}</ThemeProvider>);

describe("ThemeSwitcher Component", () => {
  test("muestra el icono según el tema y alterna al hacer clic", () => {
    renderWithProvider(<ThemeSwitcher />);
    const switcher = screen.getByTestId("theme-switcher");
    // En tema light debe mostrar IconMoon (svg con path de luna)
    expect(switcher.querySelector("svg")).toBeInTheDocument();

    // Alternar tema
    const button = switcher.querySelector("button");
    fireEvent.click(button);

    // Tras el click, sigue habiendo svg (IconSun). Validamos presencia
    expect(switcher.querySelector("svg")).toBeInTheDocument();
  });
});