import React from "react";
import SayHello from "./components/SayHello";
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
    <div>
    <div className="todo-container">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} discount={20} />
      ))}
    </div>
    <SayHello id={9} />
    </div>
  );
}

export default App;
