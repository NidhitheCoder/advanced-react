import React from "react";
import Todo from "./components/Todo";
export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  // const add = (a: number, b: number) => {
  //   return a + b;
  // }

  const todos: TodoItem[] = [
    { id: 1, title: "Washing clothes", completed: true },
    { id: 2, title: "Making dinner", completed: false },
  ];

  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
