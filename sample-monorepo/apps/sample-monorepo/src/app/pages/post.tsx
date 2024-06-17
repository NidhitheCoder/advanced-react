const Post = () => {
  const post = {
    title: 'kSample text',
  };

  return (
    <div className="bg-gray-700 h-screen w-screen">
      <h1>{post.title}</h1>
      <div className="grid grid-cols-4">{post.title}</div>
    </div>
  );
};

export default Post;
