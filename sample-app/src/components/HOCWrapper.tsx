import React from "react";

const HOCWrapper = (WrappedComponent) => {
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

