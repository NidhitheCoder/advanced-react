import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"

export const AlbumDetails = () => {

  const [album, setAlbum] = useState({});

  const { id } = useParams();

  async function getAlbumData() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
      setAlbum(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAlbumData();
  }, []);

  return (
    <div>
      <p>Album details page</p>
      <Link to="/albums">Back</Link>
      <p>======</p>
      <Link to="/">Go To Home</Link>
      <div className="album-details">
        <h3>{album?.id}</h3>
        <p>{album.title}</p>
      </div>
    </div>
  );
}
