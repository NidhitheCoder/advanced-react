import React from "react";
import Todo from "./components/Todo";
type TodoItem = {
  id: number;
  title: string;
};

function App() {
  // const add = (a: number, b: number) => {
  //   return a + b;
  // }

  const todos: TodoItem[] = [
    { id: 1, title: "Washing clothes" },
    { id: 2, title: "Making dinner" },
  ];

  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
