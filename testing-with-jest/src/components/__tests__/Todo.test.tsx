import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { TodoItem } from "../../App";

test("Shoud render non completed todo component", () => {
  const todo: TodoItem = { id: 1, title: "Washing clothes", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-item-" + todo.id);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(todo.title);
  expect(todoElement).toContainHTML('<h4>');
});

afterEach(() => {
  cleanup();
});

test("Shoud render completed todo component", () => {
  const todo: TodoItem = { id: 2, title: "Making dinner", completed: true };
  render (<Todo todo={todo} />)
  const todoElement = screen.getByTestId('todo-item-' + todo.id);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(todo.title);
  expect(todoElement).toContainHTML('<h2>');
});
