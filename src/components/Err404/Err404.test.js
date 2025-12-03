import { render, screen } from "@testing-library/react";
import Err404 from "./Err404";

describe("Err404 Component", () => {
  test("muestra el mensaje principal y enlaces", () => {
    render(<Err404 />);
    expect(screen.getByText(/Ups... La página no se ha encontrado/i)).toBeInTheDocument();
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Lista de Tareas/i)).toBeInTheDocument();
    expect(screen.getByText(/Directorio de Usuarios/i)).toBeInTheDocument();
  });
});