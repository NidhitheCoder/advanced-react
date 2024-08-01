import { useEffect, useState } from 'react';
import { getPost } from '../api';
import { Post } from '../types';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id: postID } = useParams();
  const [post, setPost] = useState<Post>();

  const getCurrentPost = async () => {
    if (postID) {
      const currentPost = await getPost(postID);
      setPost(currentPost);
    }
  };

  useEffect(() => {
    getCurrentPost();
  }, []);

  if (!post || !postID) {
    return <div>No information available</div>;
  }

  return (
    <div className="bg-gray-700 h-screen w-screen">
      <h1>{post.title}</h1>
      <div className="grid grid-cols-4">{post.description}</div>
      <p>{post.author}</p>
    </div>
  );
};

export default SinglePost;
