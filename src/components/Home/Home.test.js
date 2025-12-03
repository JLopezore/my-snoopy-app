import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  test("renderiza título y texto de guía", () => {
    render(<Home />);
    expect(screen.getByText(/Bienvenido a la Aplicación de Demostración/i)).toBeInTheDocument();
    expect(screen.getByText(/Directorio de Usuarios/i)).toBeInTheDocument();
  });
});