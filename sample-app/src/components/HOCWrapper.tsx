import React from "react";
import { useState } from "react";

const HOCWrapper = (WrappedComponent) => {
  const [isLoader, setIsLoader] = useState();
  if (isLoader) {
    return (
      <div className="h-screen w-screen grid place-items-center">
        <p>Loading</p>
      </div>
    );
  }
  return (
    <div className="bg-slate-100">
      <p className="rotate-12">One</p>
      <p className="rotate-12">Two</p>
      <p className="rotate-12">Three</p>
      <p className="rotate-12">Four</p>
      <p className="rotate-12">Five</p>
      <p className="rotate-12">Hello</p>
      <WrappedComponent />
    </div>
  );
};

export default HOCWrapper;
