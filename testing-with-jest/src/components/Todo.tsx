import React, { useState } from "react";

type TodoItem = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  discount?: number;
};

const Todo = ({ todo, discount = 10 }: TodoItem) => {
  const [isDiscountCollected, setIsDiscountCollected] = useState(false);
  const getRevard = () => {
    console.log("reward anounced");
  };

  const waitMore = () => {
    console.log("You need to wait more");
  };

  const collectDiscount = () => {
    setIsDiscountCollected(true)
  }
  const notificationSection = todo.completed ? (
    <div>
      <button data-testid="reward-button" onClick={getRevard}>
        Get reward
      </button>
      <p>Congratulations</p>
    </div>
  ) : (
    <button data-testid="waitmore-button" onClick={waitMore}>
      Wait More
    </button>
  );

  return (
    <div data-testid={`todo-item-${todo.id}`} className={isDiscountCollected ? 'todo-card-empty' : 'todo-card'}>
      {todo.title}
      {todo.completed ? <h2>{todo.completed}</h2> : <h4>{todo.completed}</h4>}
      {notificationSection}
      {discount && <div>{discount}</div>}
      <button data-testid="collect-discount-button" onClick={collectDiscount}>Collect Discount</button>
    </div>
  );
};

export default Todo;
