import React, { useState } from "react";

const Features = () => {
  const [featuresList, setfeatureslist] = useState([]);
  return (
    <div>
      <h1>Features will be listed here</h1>
      {featuresList?.map((feature) => (
        <div>{feature.name}</div>
      ))}
    </div>
  );
};

export default Features;
