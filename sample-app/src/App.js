import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";

const reducer = ({state}) => {
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
  const [state, dispatch] = useReducer(reducer, {state:"PRESSED_ONCE"});
  return (
    <div
      style={{ color, textDecoration: underline && "underline" }}
  
    >
    <div onClick={() => dispatch()}>I am a button</div>
     <div>{state.state}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Button color="blue" />
      <Button color="green" />
      <Button color="red" />
    </div>
  );
}

export default App;
