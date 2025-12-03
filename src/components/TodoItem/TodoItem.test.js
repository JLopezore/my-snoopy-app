import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const sampleTask = { id: "1", text: "Tarea de prueba", isComplete: false };

describe("TodoItem Component", () => {
  test("renderiza y dispara handlers", () => {
    const onToggleComplete = jest.fn();
    const onDeleteTask = jest.fn();

    render(
      <ul>
        <TodoItem task={sampleTask} onToggleComplete={onToggleComplete} onDeleteTask={onDeleteTask} />
      </ul>
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(onToggleComplete).toHaveBeenCalledTimes(1);

    const deleteBtn = screen.getByRole("button");
    fireEvent.click(deleteBtn);
    expect(onDeleteTask).toHaveBeenCalledWith(sampleTask);
  });
});