import React from "react";
import axios from 'axios';
import { useQuery } from "react-query";

const Features = () => {
  const { data: featuresList, isLoading } = useQuery('features posts', () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res: any) => res.data);
  });

  if (isLoading) {
    return <div><p>Loading...</p></div>
  }

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
