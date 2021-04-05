import logo from "./logo.svg";
import "./App.css";
import { useEffect, useReducer, useState } from "react";

const reducer = ({ state }) => {
  switch (state) {
    case "PRESSED_ONCE":
      return { state: "PRESSED_TWO" };
    case "PRESSED_TWO":
      return {
        state: "PRESSED_THREE",
      };
    case "PRESSED_THREE":
      return {
        state: "PRESSED_ONCE",
      };
  }
};

const Button = ({ color, increment, underline }) => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { state: "PRESSED_ONCE" });
  return (
    <div style={{ color, textDecoration: underline && "underline" }}>
      <div onClick={() => dispatch()}>I am a button</div>
      <div>{state.state}</div>
    </div>
  );
};
// idle
// Loading
// loaded
// error

function App() {
  const [state, setState] = useState("idle");
  const clicked = () => {
    setState("loading");
    fetch("/data.json")
      .then((data) => {
        try {
        JSON.parse(data)
        setState("loaded");
        } catch(err) {
          setState('json-error')
        }
      })
      .catch((err) => setState("Network-error"));
  };

  if(state === "loading"){
    return <div>Loading...</div>
  }

  if(state === "Network-error"){
    return <div>Error fetching in your request</div>
  }

  if(state === 'req-error') {
    return <div>Bad server response</div>
  }
  return <div className="App" onClick={clicked}>Current state :{state}</div>;
}

export default App;
