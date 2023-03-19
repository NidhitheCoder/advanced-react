// import UseEffectHook from "./components/UseEffect";
// import UseEffectExample2 from  './components/UseEffectExample2'

import { useEffect, useState } from "react";
import UseEffectCleanup from "./components/UseEffectCleanup";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    if (!delay) {
      const int = setInterval(() => setIsOpen((prev) => !prev), 500);

      return () => clearInterval(int);
    }
  }, [delay]);

  useEffect(() => {
    const time = setTimeout(() => setDelay(false), 5000);
    return () => clearTimeout(time);
  }, []);

  return (
    <div className="App">
      <h1>React hooks</h1>
      <p>isOpen: {isOpen.toString()}</p>
      {/* <UseEffectHook /> */}
      {/* <UseEffectExample2 /> */}
      <UseEffectCleanup />
    </div>
  );
}

export default App;
