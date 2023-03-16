import { useEffect } from "react";
import { useState } from "react";

function UseEffectCleanup() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("useEffect runs!");

    // Return a cleanup function
    return () => {
      console.log("cleaning started!");
      // Clean something from the previous effect
      console.log("cleanup completed");
    };
  }, [toggle]);

  return (
    <div>
      <p>{toggle}</p>
      <button onClick={() => setToggle(!toggle)}>Change Toggle</button>
    </div>
  );
}

export default UseEffectCleanup;
