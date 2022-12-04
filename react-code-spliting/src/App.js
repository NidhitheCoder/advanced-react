import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Teams = lazy(() => import("./components/Teams"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
