import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`);
};

export const DynamicParallelPage = ({ heroIds }) => {

 const queryResults = useQueries(
    heroIds.map((id)=> {
      return {
        queryKey: ['super-hero', id],
        queryFunc: () => fetchSuperHero(id),
      }
    })
  )
  console.log({queryResults});
  return <div>DynamicParallelPage</div>
}