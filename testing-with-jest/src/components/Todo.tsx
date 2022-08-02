import React from "react";

type TodoItem = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
};

const Todo = ({ todo }: TodoItem) => {
  const getRevard = () => {
    console.log("reward anounced");
  };

  const waitMore = () => {
    console.log("You need to wait more");
  };

  const notificationSection = todo.completed ? (
    <div>
      <button data-testid="reward-button" onClick={getRevard}>Get reward</button>
      <h2>Congratulations</h2>
    </div>
  ) : (
    <button data-testid="waitmore-button" onClick={waitMore}>Wait More</button>
  );

  return (
    <div data-testid={`todo-item-${todo.id}`}>
      {todo.title}
      {todo.completed ? <h2>{todo.completed}</h2> : <h4>{todo.completed}</h4>}
      {notificationSection}
      {todo.completed ? (
        <div>Haii</div>) :
        <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum? Consectetur libero, dolorum voluptate corrupti praesentium temporibus rem. Officiis vitae mollitia eligendi libero blanditiis quos amet maxime quasi doloribus odio?
          </div>

      )}
    </div>
  );
};

export default Todo;
