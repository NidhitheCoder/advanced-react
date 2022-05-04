import { useQuery } from 'react-query';
import axios from '../axios';

const fetchSuperHeros = () => {
  return axios.get('/superheros');
};

const fetchFriends = () => {
  return axios.get('/friends');
};

export const ParallelQueriesPage = () => {

  const { data: superHeros } = useQuery('super-heros', fetchSuperHeros);
  const { data: friends } = useQuery('friends', fetchFriends);
 
  return <div>Parallel Queries page</div>
}