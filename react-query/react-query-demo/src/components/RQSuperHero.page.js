import react from  'react';
import { useParams } from 'react-router-dom';
import { useSuperheroData } from '../hooks/useSuperHeroData';

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, isError, data, error } = useSuperheroData(heroId);

  if(isLoading) {
    return <h2>Loading..</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      Super hero details
      <h2>{data?.data?.name} - {data?.data?.colorTheme}</h2>
    </div>
  )
}