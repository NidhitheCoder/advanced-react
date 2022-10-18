import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [wish, setWish] = useState("Happy kids");

  const adjustCount = (amount: number) => {
    // setCount(count + amount);
    // setCount(count + amount);

    setCount((prevCount: number) => prevCount + amount);
    setCount((prevCount: number) => prevCount + amount);
    setWish("lorem imposible");
  };

  return (
    <div className="w-1/2 mx-auto flex flex-col">
      <button onClick={() => adjustCount(1)}>Increment</button>
      <span>{count}</span>
      <button onClick={() => adjustCount(-1)}>Decrement</button>
      <h2>{wish}</h2>
    </div>
  );
};

export default Counter;
