import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";

export const AlbumDetails = () => {
  const [album, setAlbum] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  async function getAlbumData() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${id}`
      );
      setAlbum(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAlbumData();
  }, []);

  const close = (e) => {
    navigate(`/albums/${album.id}`);
    e.preventDefault();
  };

  return (
    <div>
      <p>Album details page</p>
      <Link to="/albums">Back</Link>
      <p>======</p>
      <Link to="/">Go To Home</Link>
      <div className="album-details">
        <h3>{album?.id}</h3>
        <p>{album.title}</p>
        <Link className="album" to={`/albums/${album.id}/details`}>
          See more
        </Link>
      </div>
      {location.pathname === `/albums/${album.id}/details` && <Modal onClose={close} />}
      {location.pathname === `/albums/${album.id}/edit` && <Modal onClose={close} />}
    </div>
  );
};
