const fetchPosts = async () => {
  console.log("Fetching Posts");

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  posts = response.data;

  console.log({ posts });

  return posts;
};

const fetchComments = async () => {
  console.log("Fetching comments");

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const comments = response.data;

  console.log({ comments });

  return comments;
};

export default { fetchComments, fetchPosts };
