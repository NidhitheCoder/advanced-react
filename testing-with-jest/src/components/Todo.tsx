import React from "react";

type TodoItem = {
  todo: {
    id: number;
    title: string;
  };
};

const Todo = ({ todo }: TodoItem) => {
  console.log(todo);
  return <div data-testid="todo-item">Hello {todo.title}</div>;
};

export default Todo;
