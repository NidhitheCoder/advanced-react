import React, { useState, useTransition } from "react";

const UseTransitionHook = () => {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");

  const someEventHandler = (event: any) => {
    startTransition(() => {
      setValue(event.target.value);
    });
  };

  return (
    <div>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        molestias asperiores magni, dolores ducimus, error fuga quis est sit
        laborum delectus. Itaque eveniet ipsum, maiores vero asperiores
        exercitationem sapiente ipsam?
      </h1>
      <button onClick={someEventHandler}>Click Me</button>
    </div>
  );
};

export default UseTransitionHook;
