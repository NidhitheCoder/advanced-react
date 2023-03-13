import { useEffect, useState } from "react";

function UseEffectHook() {
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState("");
  const [userState, setUserState] = useState({
    name: "",
    selected: false,
  });

  useEffect(() => {
    console.count("useEffect");
    document.title = `Title ${number}`;
  }, []);

  console.count("Component rendered", name);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const onChangeName = (e) => {
    // setName(e.target.value);
    setUserState({ ...userState, name: e.target.value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>UseEffect Hook</h3>
      <span> you clicked {number} times</span>
      <button onClick={increaseNumber}>Increase</button>
      <input onChange={onChangeName} />
    </div>
  );
}

export default UseEffectHook;
