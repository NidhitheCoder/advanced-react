import { Link } from 'react-router-dom';

import Logo from '../components/Logo';
import { ROUTES } from '../constants';

const Dashboard = () => {
  return (
    <div className="bg-gray-700 h-full text-white p-10 flex flex-col gap-10">
      <Logo />
      <div className="bg-fuchsia-50 rounded-md p-5 text-green-800 flex flex-col gap-4">
        <h1 className="font-extrabold text-3xl text-purple-700">Posts</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem maxime, odit voluptatem voluptatum nihil velit ea,
          sequi cumque nisi nulla aliquid rem itaque dignissimos nesciunt. Vero,
          consequuntur. Molestiae, nulla numquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur quisquam earum veniam! Esse
          animi eum neque odio corrupti quas optio ullam quibusdam saepe
          suscipit autem possimus, maxime, sit laudantium exercitationem.
        </h4>
        <Link
          className="text-blue-500 font-bold underline pt-4"
          to={ROUTES.posts}
        >
          Posts
        </Link>
      </div>
      <div className="bg-fuchsia-50 rounded-md p-5 text-green-800 flex flex-col gap-4">
        <h1 className="font-extrabold text-3xl text-purple-700">
          Create a post
        </h1>
        <div className="flex flex-row">
          <p>Do you want to create a new Post in</p>
          <Logo size='20'/>
          <p>?</p>
        </div>
        <p>Do it right Now..! </p>
        <Link
          className="text-blue-500 font-bold underline pt-4"
          to={ROUTES.createPost}
        >
          Create a post
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
