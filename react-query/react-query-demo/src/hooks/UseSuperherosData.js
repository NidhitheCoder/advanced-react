// import axios from "../axios";
import { request } from  '../utils/axios-utils';
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchSuperHeros = () => {
  // return axios.get('/superheros');
  return request({ url: '/superheros'});
};

const addSuperHero = (hero) => {
  // return axios.post('/superheros', hero);
  return request({ url: '/superheros', method: 'post', data: hero});
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
    // onSuccess: () => {
    //   queryClient.invalidateQueries('super-heros');
    //   queryClient.setQueryData('super-heros', (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data]
    //     };
    //   })
    // }
    onMutate: async (newHero) => {
      await queryClient.cancelQueries('super-heros');
      const previousherosdata = queryClient.getQueryData('super-heros');
      queryClient.setQueryData('super-heros', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, {
            id: oldQueryData?.data?.length + 1, ...newHero
          }]
        }
      })
      return {
        previousherosdata,
      }
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('super-heros', context.previousherosdata);
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heros');
    },
  })
}