import React from "react";
import axios from "axios";
import { useQueries, useQuery } from "react-query";

const fetchSuperHero = (postId: number) => {
  return axios.get(`http://localhost:4000/superheros/${postId}`);
};

const Features = () => {
  const { data: featuresList, isLoading } = useQuery("features posts", () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res: any) => res.data);
  });

  const queryResults = useQueries(
    featuresList.map((feature: any) => {
      return {
        queryKey: ["posts", feature.id],
        queryFunc: () => fetchSuperHero(feature.id),
      };
    })
  );

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>Features will be listed here</h1>
        {featuresList?.map((feature: any) => (
          <div className="post">{feature.title}</div>
        ))}
      </div>
      <div>
        {queryResults.map(post => {
          return (
            <div>
              <p>{post.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Features;
