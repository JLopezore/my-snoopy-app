import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders the title", () => {
    render(<TodoList />);
    const title = screen.getByText(/Mi Lista de Tareas/i);
    expect(title).toBeInTheDocument();
  });

  test("adds a new task", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Añade una nueva tarea/i);
    const button = screen.getByText(/Añadir/i);

    fireEvent.change(input, { target: { value: "Nueva tarea" } });
    fireEvent.click(button);

    const newTask = screen.getByText(/Nueva tarea/i);
    expect(newTask).toBeInTheDocument();
  });
});