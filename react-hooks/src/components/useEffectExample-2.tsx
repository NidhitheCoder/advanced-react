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

// Best way without unwanted rerendering
  useEffect(() => {
    console.log('changes with number:', number)
    setInterval(() => {
      setNumber(prev => prev + 1);
    }, 2000);
  }, []);

  return <div>{number}</div>;
}

export default UseEffectExample2;
 