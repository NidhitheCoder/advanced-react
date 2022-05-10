import { useQuery } from 'react-query';
import axios from 'axios';

const fetchColors = () => {
  return axios.get('http://localhost:4000/colors');
};

export const PaginatedQueries = () => {
  const { isLoading, isError, error, data } = useQuery('colors', fetchColors);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.mssage}</h2>
  }

  return (
    <div>
      <h1>Paginated queries</h1>
      <div>
        {data?.data?.map((color) => {
          return (
            <div key={color.id}>
              <h2>{color.id}.{color.label}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}