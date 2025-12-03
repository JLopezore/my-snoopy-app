import React from "react";
import { render, screen } from "@testing-library/react";
import TodoDelete from "./TodoDelete";

jest.mock("../../firebaseConfig", () => ({ db: {} }));

const mockDeletedTasks = [
  {
    id: "d1",
    text: "Eliminada 1",
    deletedAt: { toDate: () => new Date() },
    createdAt: { toDate: () => new Date() },
  },
];

jest.mock("firebase/firestore", () => {
  const onSnapshot = (q, cb) => {
    const snap = {
      forEach: (fn) => {
        mockDeletedTasks.forEach((t) => fn({ id: t.id, data: () => t }));
      },
    };
    cb(snap);
    return () => {};
  };
  return {
    collection: jest.fn(),
    query: jest.fn(),
    orderBy: jest.fn(),
    onSnapshot,
    doc: jest.fn(),
    deleteDoc: jest.fn(),
    addDoc: jest.fn(),
  };
});

describe("TodoDelete Component", () => {
  test("renderiza lista de eliminadas desde snapshot", () => {
    render(<TodoDelete />);
    expect(screen.getByText(/Tareas Eliminadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Eliminada 1/i)).toBeInTheDocument();
  });
});