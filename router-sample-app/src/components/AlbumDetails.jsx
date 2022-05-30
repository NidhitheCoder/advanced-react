import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"

export const AlbumDetails = () => {

const { id } = useParams();

  async function getAlbumData() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAlbumData();
  }, [getAlbumData]);

  return (
    <div>
      <p>Album details page</p>
      <Link to="/albums">Back</Link>
      <p>======</p>
      <Link to="/">Go To Home</Link>
    </div>
  );
}
