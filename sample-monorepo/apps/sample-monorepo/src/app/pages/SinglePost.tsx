import { useEffect, useState } from 'react';
import { getPost } from '../api';
import { Post } from '../types';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../constants';

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
    <div className="bg-gray-700 min-h-screen w-screen p-6">
      <Link to={ROUTES.posts} className="text-blue-500 my-4">
        Back to Posts
      </Link>
      <div className="text-white font-medium">
        <img
          className="w-full"
          src="https://picsum.photos/800/200"
          alt="post thumb"
        />
        <h1>Name: {post.title}</h1>
        <h4>Description</h4>
        <div className="grid grid-cols-4">{post.description}</div>
        <p>Author: {post.author}</p>
      </div>
    </div>
  );
};

export default SinglePost;
