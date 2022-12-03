import { lazy } from "react";
import { Route, Router, Routes } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Teams = lazy(() => import('./components/Teams'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </div>
  );
}

export default App;
