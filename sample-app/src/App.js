import React from "react";
import "./App.css";
import { useState } from "react";
// import Navbar from "./components/Navbar";
import UnwantedUseState from "./components/hooks/UnwantedUsestate";
import StateComp from "./components/StateComp";
import Counter from "./components/hooks/Counter";

// const reducer = ({ state }) => {
//   switch (state) {
//     case "PRESSED_ONCE":
//       return { state: "PRESSED_TWO" };
//     case "PRESSED_TWO":
//       return {
//         state: "PRESSED_THREE",
//       };
//     case "PRESSED_THREE":
//       return {
//         state: "PRESSED_ONCE",
//       };

//     default:
//       return "PRESSED_NOTHING"
//   }
// };

// const Button = ({ color, increment, underline, background}) => {
//   // const [counter, setCounter] = useState(0);
//   const [state, dispatch] = useReducer(reducer, { state: "PRESSED_ONCE" });
//   return (
//     <div style={{ color, background, textDecoration: underline && "underline" }}>
//       <div onClick={() => dispatch()}>I am a button</div>
//       <div>{state.state}</div>
//     </div>
//   );
// };

function App() {
  const [state, setState] = useState("idle");
  const clicked = () => {
    setState("loading");
    fetch("/data.json")
      .then((data) => {
        console.log(data);
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

  return <div className="App">
    <div onClick={clicked}> click</div>
    <UnwantedUseState />
    {/* <div className="container one">
      One Current state :{state}
    <Button color="orange" background="blue" />
    </div>
    <div className="container two">Two</div>
    <div className="container three">Three</div>
    <div className="container one">Four</div> */}
    <StateComp />
    <Counter />
    </div>;
}

export default App;
