import React from "react";
import ReactDOM from "react-dom";

// const template = React.createElement(
//   "h1",
//   { className: "title" },
//   "Hello World"
// );
// const template = <h1>Hello</h1>;
// ReactDOM.render(template, document.getElementById("root"));

const App = () => {
  return <h1>Hello React world</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
