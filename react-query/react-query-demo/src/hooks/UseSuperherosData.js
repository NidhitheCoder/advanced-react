import axios from "../axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchSuperHeros = () => {
  return axios.get('/superheros');
};

const addSuperHero = (hero) => {
  return axios.post('/superheros', hero);
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

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('super-heros')
    }
  })
}