import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Features = () => {

  const [post, setPost] = useState<any>();
  const { data: featuresList, isLoading } = useQuery("features posts", () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res: any) => res.data);
  });

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
        <p>{post.name}</p>
      </div>
    </div>
  );
};

export default Features;
