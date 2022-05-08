import axios from "../axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`/superheros/${heroId}`);
};


export const useSuperheroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(
    ['super-hero', heroId],
    () => fetchSuperHero(heroId),
    {
      initialData: () => {
        const hero = queryClient.getQueryData('super-heros')?.data?.find(hero=>hero === parseInt(heroId));

        if(hero) {
          return {
            data: hero
          }
        } else {
          return undefined;
        }
      }
    }
  );
}
