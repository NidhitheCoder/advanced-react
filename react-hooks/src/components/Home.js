import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/posts">Go To Posts</Link>
    </div>
  );
};

export default Home;
