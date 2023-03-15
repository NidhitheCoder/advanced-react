import { useEffect, useMemo, useState } from "react";

function UseEffectHook() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [userState, setUserState] = useState({
    name: "",
    selected: false,
    age: 20,
    city: "",
  });

  // useEffect(() => {
  //   console.count("useEffect");
  //   document.title = `Title ${number}`;
  // }, []);

  // console.count("Component rendered", name);

  // You can use useMemo hook for avoid multi rendering of code
  // const user = useMemo(
  //   () => ({
  //     name: userState.name,
  //     selected: useState.selected,
  //   }),
  //   [userState.name, userState.selected]
  // );
  useEffect(() => {
    console.log("The state has changed, useEffect runs!");
    // you can add every single primitive variables here
  }, [userState.name, userState.selectedW]);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const addNameToUserState = () => {
    setUserState((prev) => ({ ...prev, name: name }));
  };

  const handleSelect = () => {
    setUserState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20vw",
        margin: "0 auto",
        gap: "2rem",
      }}
    >
      <h3>UseEffect Hook</h3>
      <span> you clicked {number} times</span>
      <button onClick={increaseNumber}>Increase</button>
      <input onChange={onChangeName} />
      <button onClick={addNameToUserState}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      <p>{`name: ${userState.name}`}</p>
      <p>{`Selected: ${userState.selected}`}</p>
    </div>
  );
}

export default UseEffectHook;
