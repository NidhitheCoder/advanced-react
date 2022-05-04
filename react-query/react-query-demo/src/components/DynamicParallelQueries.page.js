import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`);
};

export const DynamicParallelPage = ({ heroIds }) => {
  return <div>DynamicParallelPage</div>
}