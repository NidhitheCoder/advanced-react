const Posts = () => {
  const posts = [
    {
      title: 'Sample post',
      description: 'This is a sample post description',
      thumbnailImage: 'https://picsum.photos/600/400',
    },
  ];
  return (
    <div className="bg-gray-700 h-screen w-screen flex flex-col items-center p-6 overflow-y-auto overflow-x-hidden">
      <h2 className="text-white text-3xl font-bold">Your posts</h2>
      <div className="w-full h-full grid grid-cols-4 gap-6 border-solid border-[0.5px] border-gray-500 p-6">
        {posts?.map((post) => (
          <div className="bg-gray-600 h-96 rounded-md">
            <img
              src={post.thumbnailImage}
              alt="post"
              className="rounded-tl-md rounded-tr-md"
            />
            <div className="p-4 text-white">
              <h1 className="font-bold text-gray-300">{post.title}</h1>
              <span className="text-sm text-gray-400">{post.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
