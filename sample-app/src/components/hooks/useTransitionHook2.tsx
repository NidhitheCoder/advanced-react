import React, { ChangeEvent, useState } from "react";

const UseTransitionHook2 = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  const LIST_SIZE = 20000;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    const updatedList = [];
    for (let index = 0; index < LIST_SIZE; index++) {
      updatedList.push(e.target.value);
      setList(updatedList);
    }
  };

  return (
    <div className="">
      <input type="text" name="" id="" onChange={handleChange} />
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default UseTransitionHook2;
