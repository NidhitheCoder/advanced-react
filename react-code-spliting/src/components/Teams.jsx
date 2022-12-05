import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Teams = () => {
  const [posts, setPosts] = useState();
  const [comments, setComments] = useState();

  const fetchData = async () => {
    const postsFromApi = await fetchPosts();
    const commentsFromApi = await fetchComments();

    setPosts(postsFromApi);
    setComments(commentsFromApi);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Teams profile</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut eaque
        voluptatibus fuga sequi quos reprehenderit distinctio, nostrum
        necessitatibus, pariatur nihil. Inventore mollitia facilis labore
        impedit tempore quod tempora laudantium?
      </p>
      <a href="/">Back to home</a>
    </div>
  );
};

export default Teams;
