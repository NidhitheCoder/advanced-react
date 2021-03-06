import { useEffect, useState } from "react";
import axios from '../axios';

export const SuperHerosPage = () => {
  const [isloading, setIsloading] = useState(true);
  const [heros, setHeros] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get('/superheros').then((res) => {
      setHeros(res.data);
      setIsloading(false);
    }).catch(error => {
      setError(error.message);
      setIsloading(false);
    })
  }, []);

  if (isloading) {
    return <h2>Loading....</h2>
  }

  if (error) {
    return <h2> {error}</h2>
  }

  return (
    <div>
      <h2>Traditional superheros Page</h2>
      {heros.map(hero => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </div>
  )
}