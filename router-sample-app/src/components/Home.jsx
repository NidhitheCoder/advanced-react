import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <p>Home page</p>
      <Link to="/albums">Album List</Link>
    </div>
  );
}
