import { lazy } from "react";
import { Router, Routes } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))

function App() {
  return (
    <div className="App">
      <Router>
        <Routes path="/about" element={<About />} />
        <Routes path="/" element={<Home />} />
      </Router>
    </div>
  );
}

export default App;
