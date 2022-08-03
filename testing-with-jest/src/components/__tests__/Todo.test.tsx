import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { TodoItem } from "../../App";

test("Shoud render non completed todo component", () => {
  const todo: TodoItem = { id: 1, title: "Washing clothes", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-item-" + todo.id);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(todo.title);
  expect(todoElement).toContainHTML('<h4>');

  // screen.getByTestId('reward-button');
  const waitMore = screen.getByTestId('waitmore-button');
  
  expect(waitMore).toBeInTheDocument();
  fireEvent.click(waitMore);
});

afterEach(() => {
  cleanup();
});

test("Shoud render completed todo component", () => {
  const todo: TodoItem = { id: 2, title: "Making dinner", completed: true };
  render (<Todo todo={todo} discount={20}/>)
  const todoElement = screen.getByTestId('todo-item-' + todo.id);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(todo.title);
  expect(todoElement).toContainHTML('<h2>');

  const reward = screen.getByTestId('reward-button');
  expect(reward).toBeInTheDocument();
  fireEvent.click(reward);
  // screen.getByTestId('waitmore-button');

  const collectButton = screen.getByTestId('collect-discount-button');
  expect(collectButton).toBeInTheDocument();
});
