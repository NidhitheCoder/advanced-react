import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { fetchComments, fetchPosts } from "../api";

const Teams = () => {
  const [posts, setPosts] = useState();
  const [comments, setComments] = useState();

  const fetchData = async () => {
    // const postsFromApi = await fetchPosts();
    // const commentsFromApi = await fetchComments();

    const postsPromise = fetchPosts();
    const commentsPromise = fetchComments();

    const postsAPI = await postsPromise;
    const commentsAPI = await commentsPromise;

    setPosts(postsAPI);
    setComments(commentsAPI);

    // setPosts(postsFromApi);
    // setComments(commentsFromApi);
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

      <h2>Posts</h2>
      {posts?.map((post) => (
        <div style={{ padding: "2rem" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      <h2>Comments</h2>
      {comments?.map((comment) => (
        <div>
          <h4>{comment.name}</h4>
          <h6>{comment.email}</h6>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;
