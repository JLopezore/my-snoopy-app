import { renderHook, act } from "@testing-library/react-hooks";
import { ThemeProvider } from "./ThemeContext";
import React from "react";
import ThemeContext from "./ThemeContext";

describe("ThemeContext", () => {
  test("toggles theme", () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => React.useContext(ThemeContext), { wrapper });

    expect(result.current.theme).toBe("light");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");
  });
});