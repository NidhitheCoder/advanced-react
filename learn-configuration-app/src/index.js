import React from "react";
import ReactDOM from "react-dom/client";
// import styles from './style/style.css'

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

// Old one and not supported
// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
