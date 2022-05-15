import axios from "../axios";
import { useMutation, useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get('/superheros');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheros', hero);
}


export const useSuperherosData = (onSuccess, onError) => {
  return useQuery(
    'super-heros',
    fetchSuperHeros,
    {
      // // cacheTime: 5000
      // staleTime: 30000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
      enabled: false,
      onSuccess,
      onError,
      // select: (data) => {
      //   const superHeroNames = data.data.map(hero => hero.name);
      //   return superHeroNames;
      // }
    }
  );
  // console.log({ isFetching, isLoading });

}

export const addSuperHeroData = () => {
  return useMutation(addSuperHero)
}