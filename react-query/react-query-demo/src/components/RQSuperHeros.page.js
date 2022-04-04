import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get('http://localhost:4000/superheros');
};

export const RQSuperHerosPage = () => {
  const { isLoading, data, error, isError } = useQuery('super-heros', fetchSuperHeros);

  if(isLoading ) {
    return <h2>Loading...</h2>;
  }

  if (isError = ()  => <Flex> Helloeee</Flex>);

  return (
    <div>
      <h2>React query Traditional superheros Page</h2>
      {
        data?.data?.map(hero => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
    </div>
  )
}