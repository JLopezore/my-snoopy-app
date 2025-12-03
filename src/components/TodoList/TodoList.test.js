import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders the title", () => {
    render(<TodoList />);
    const title = screen.getByText(/Mi Lista de Tareas/i);
    expect(title).toBeInTheDocument();
  });
});