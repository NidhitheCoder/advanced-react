import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

async function getUser() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export const AlbumsList = () => {

useEffect(() => {
getUser();
}, [])
  return (
    <div>
      <p>Albums</p>
      <Link to="/albums/1">First element detail</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magnam deleniti nobis distinctio incidunt, molestiae aut quidem
        ratione animi nihil minima recusandae est nisi
        blanditiis officiis ducimus culpa nemo in maxime.
      </p>
      <Link to="/">Go To Home</Link>
    </div>
  );
}
