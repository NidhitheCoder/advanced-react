import React, { useEffect, useState } from "react";

function UseEffectExample2() {
  const [number, setNumber] = useState(0);

  //   Leads to rerendering
  //   useEffect(() => {
  //     console.log('changes with number:', number)
  //     setInterval(() => {
  //       setNumber(number + 1);
  //     }, 2000);
  //   }, [number]);

  // Best way without unwanted rerendering and this one also some issue and it 
  // create different setinterval in each render.
  useEffect(() => {
    console.log("changes with number:", number);
    setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  }, []);

  return <div>{number}233ssssjjghgss</div>;
}

export default UseEffectExample2;
