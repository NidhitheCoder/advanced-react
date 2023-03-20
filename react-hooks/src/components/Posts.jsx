import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const isCancelled = false;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (isCancelled) {
          alert("Posts are updated");
          setPosts(data);
          console.log("data", data);
        }
      });

    return () => {};
  }, []);
  return (
    <div>
      {posts?.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

export default Posts;
