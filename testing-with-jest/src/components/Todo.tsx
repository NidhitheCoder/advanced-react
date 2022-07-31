import React from "react";

type TodoItem = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
};

const Todo = ({ todo }: TodoItem) => {
  console.log(todo);
  return (
    <div data-testid={`todo-item-${todo.id}`}>
      {todo.title}
      {todo.completed ? <h2>{todo.completed}</h2> : <h4>{todo.completed}</h4>}
    </div>
  );
};

export default Todo;
