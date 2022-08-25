import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

export const AlbumsList = () => {

  const [albums, setAlbums] = useState([]);

  async function getAlbumsList() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAlbumsList();
  }, []);

  return (
    <div className="albums-container">
      <p>Albums</p>
      <Link to="/">Go To Home</Link>
      <div>
        {
          albums.map(album => (
            <Link className="album" to={`/albums/${album.id}`}>
              <h3>{album.id}</h3>
              <p>{album.title}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
