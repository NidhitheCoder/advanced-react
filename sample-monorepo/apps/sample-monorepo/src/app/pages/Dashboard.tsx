import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const Dashboard = () => {
  return (
    <div className="bg-gray-700 min-h-screen text-white p-10">
      <h1 className="text-2xl font-bold">Postingzzz</h1>
      <div className="bg-fuchsia-50 rounded-md p-5 text-green-800">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem maxime, odit voluptatem voluptatum nihil velit ea,
          sequi cumque nisi nulla aliquid rem itaque dignissimos nesciunt. Vero,
          consequuntur. Molestiae, nulla numquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur quisquam earum veniam! Esse
          animi eum neque odio corrupti quas optio ullam quibusdam saepe
          suscipit autem possimus, maxime, sit laudantium exercitationem.
        </h4>
        <Link className="text-blue-500 font-bold underline pt-4" to={ROUTES.posts}>
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
