import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeContext, { ThemeProvider } from "./ThemeContext";

const TestConsumer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
};

describe("ThemeContext", () => {
  test("toggleTheme alterna entre light y dark", () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    const themeSpan = screen.getByTestId("theme-value");
    expect(themeSpan.textContent).toBe("light");

    fireEvent.click(screen.getByText("toggle"));
    expect(themeSpan.textContent).toBe("dark");
  });
});