import { useEffect, useState } from 'react';
import { getPost } from '../api';
import { Post } from '../types';

const SinglePost = () => {
  const [post, setPost] = useState<Post>();

  const getCurrentPost = async () => {
    // TODO take id from the url
    const currentPost = await getPost('122');
    setPost(currentPost);
  };

  useEffect(() => {
    getCurrentPost();
  }, []);

  if (!post) return null;

  return (
    <div className="bg-gray-700 h-screen w-screen">
      <h1>{post.title}</h1>
      <div className="grid grid-cols-4">{post.description}</div>
      <p>{post.author}</p>
    </div>
  );
};

export default SinglePost;
