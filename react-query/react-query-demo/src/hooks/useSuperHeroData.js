import axios from "../axios";
import { useQuery } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`/superheros/${heroId}`);
};


export const useSuperheroData = (heroId) => {
  return useQuery(
    ['super-hero', heroId],
    () => fetchSuperHero(heroId)
  );
}
