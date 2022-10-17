import { useRef } from "react";
import React from "react";

// this is the old way and actually there are no need to use useStates
// const UnwantedUseState = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = (e: any) => {
//     e.preventDefault();
//     console.warn({ email, password });
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label htmlFor="email">Email</label>
//       <input
//         value={email}
//         type="email"
//         id="email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         value={password}
//         type="password"
//         id="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

const UnwantedUseState = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
    const onSubmit = (e: any) => {
      e.preventDefault();
      console.warn('hii',  emailRef.current);
    };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
       <input
        ref={emailRef}
        type="email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        ref={passwordRef}
        type="password"
        id="password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UnwantedUseState;
