import { Link } from "react-router-dom"

export const AlbumDetails = () => {
  return (
    <div>
      <p>Album details page</p>
      <Link to="/albums">Back</Link>
      <p>======</p>
      <Link to="/">Go To Home</Link>
    </div>
  );
}
