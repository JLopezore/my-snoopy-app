import React from "react";
import { render, screen } from "@testing-library/react";
import TodoComplete from "./TodoComplete";

jest.mock("../../firebaseConfig", () => ({ db: {} }));

const mockTasks = [
  {
    id: "c1",
    text: "Completada 1",
    completedAt: { toDate: () => new Date() },
    createdAt: { toDate: () => new Date() },
  },
];

jest.mock("firebase/firestore", () => {
  const onSnapshot = (q, cb) => {
    const snap = {
      forEach: (fn) => {
        mockTasks.forEach((t) => fn({ id: t.id, data: () => t }));
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
    serverTimestamp: jest.fn(() => new Date()),
  };
});

describe("TodoComplete Component", () => {
  test("renderiza lista de completadas desde snapshot", () => {
    render(<TodoComplete />);
    expect(screen.getByText(/Tareas Completadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Completada 1/i)).toBeInTheDocument();
  });
});