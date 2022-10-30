import React, { ChangeEvent, useState, useTransition } from "react";

const UseTransitionHook2 = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  const LIST_SIZE = 20000;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    startTransition(() => {
      const updatedList = [];
      for (let index = 0; index < LIST_SIZE; index++) {
        updatedList.push(e.target.value);
      }
      setList(updatedList);
    });
  };

  return (
    <div className="">
      <input type="text" value={input } onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
};

export default UseTransitionHook2;
