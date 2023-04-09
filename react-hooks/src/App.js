// // useeffect hook example

// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import UseEffectHook from "./components/UseEffect";
// import UseEffectExample2 from "./components/UseEffectExample2";

// import Home from "./components/Home";
// import Posts from "./components/Posts";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [delay, setDelay] = useState(true);

//   useEffect(() => {
//     if (!delay) {
//       const int = setInterval(() => setIsOpen((prev) => !prev), 500);

//       return () => clearInterval(int);
//     }
//   }, [delay]);

//   useEffect(() => {
//     const time = setTimeout(() => setDelay(false), 5000);
//     return () => clearTimeout(time);
//   }, []);

//   return (
//     <div className="App">
//       <h1>React hooks</h1>
//       <p>isOpen: {isOpen.toString()}</p>
//       <UseEffectHook />
//       <UseEffectExample2 />
//       {/* <UseEffectCleanup /> */}
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/posts" element={<Posts />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// // useEffect hook example2
// import { useEffect, useState } from "react";
// import WindowWidth from './components/WindowWidth'

// function App() {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

//   console.log("render");

//   useEffect(() => {
//     console.log(resourceType);
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [resourceType]);

//   return (
//     <div>
//       <WindowWidth />

//       <button onClick={() => setResourceType("posts")}>Posts</button>
//       <button onClick={() => setResourceType("users")}>Users</button>
//       <button onClick={() => setResourceType("comments")}>Comments</button>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item) }</pre>;
//       })}
//     </div>
//   );
// }

// export default App;

// // UseMemo hook example 1
import { useState } from "react/cjs/react.production.min";


const App = () => {
  const [number, setNumber] = useState();
  const [dark, setDark] = useState();
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const onNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const onThemeChange = () => {
    setDark((prevDark) => !prevDark);
  return (
    <>
      <input type="number" value="" onchange={onNumberChange} />
      <button onClick={onThemeChange}>Change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num) => {
  console.log(num);
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
};

export default App;
