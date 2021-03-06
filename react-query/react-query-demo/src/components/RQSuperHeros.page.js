import { useAddSuperHeroData, useSuperherosData } from "../hooks/UseSuperherosData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const RQSuperHerosPage = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');
  const onSuccess = () => {
    console.log('Perform side effect after data fetching');
  }

  useEffect(() => {refetch();}, [])

  const {mutate: addHero, isLoading: isDeleteLoading, error: deleteError, isError: isErrorInDelete } = useAddSuperHeroData();

  const onError = () => {
    console.log('Perform side effect after encountoring error');
  }

  const { isLoading, data, error, isError, isFetching, refetch } = useSuperherosData(onSuccess, onError);
  // useQuery(
  //   'super-heros',
  //   fetchSuperHeros,
  //   {
  //     // // cacheTime: 5000
  //     // staleTime: 30000,
  //     // refetchOnMount: true,
  //     // refetchOnWindowFocus: true,
  //     // refetchInterval: 2000,
  //     // refetchIntervalInBackground: true,
  //     enabled: false,
  //     onSuccess,
  //     onError,
  //     select: (data) => {
  //       const superHeroNames = data.data.map(hero => hero.name);
  //       return superHeroNames;
  //     }
  //   }
  // );
  // console.log({ isFetching, isLoading });

  const handleAddHeroClick = () => {
    // console.log({name, alterEgo});
    const hero = { name, alterEgo };
    addHero(hero);
  }

  if(isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    <p> Helloeee {error.message}</p>
  }

  return (
    <div>
      <h2>React query Traditional superheros Page</h2>
      <div>
        <input
         type="text"
         value={name}
         onChange={(e) =>  setName(e.target.value)}
        />
        <input
         type="text"
         value={alterEgo}
         onChange={(e) =>  setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add hero</button>
      </div>
      <button onClick={refetch}>Fetch heros</button>
      {
        // data?.data?.map(hero => {
        //   return <div key={hero.name}>{hero.name}</div>
        // })
        // data?.map(heroName => {
        //   return <div key={heroName}>{heroName}</div>;
        // })
        data?.data?.map(hero => {
          return <div key={hero.id}>
            <Link to={`/rq-super-heros/${hero.id}`}>
              {hero.name}
            </Link>
          </div>
        })
      }
    </div>
  )
}