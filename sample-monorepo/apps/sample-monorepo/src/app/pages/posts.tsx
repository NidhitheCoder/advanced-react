import { Link } from 'react-router-dom';

import { ROUTES } from '../constants';

const Posts = () => {
  const logoURL = 'https://picsum.photos/50/50';
  const posts = [
    {
      title: 'Sample post',
      description: 'This is a sample post description',
      thumbnailImage: 'https://picsum.photos/600/400',
    },
  ];

  return (
    <div className="bg-gray-700 h-screen w-screen flex flex-col items-center p-6 overflow-y-auto overflow-x-hidden">
      <div className="w-full h-20 flex flex-row justify-between items-center pb-4">
        <img src={logoURL} alt="Logo" />
        <h2 className="text-white text-3xl font-bold">Your posts</h2>
        <Link className="text-white" to={ROUTES.dashboard}>
          Back to Dashboard
        </Link>
      </div>
      <div className="w-full h-full grid grid-cols-4 gap-6 border-solid border-[0.5px] border-gray-500 p-6">
        {posts?.map((post) => (
          <div key={post.title} className="bg-gray-600 h-96 rounded-md">
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
