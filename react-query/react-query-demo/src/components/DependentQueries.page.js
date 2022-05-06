import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channel/${channelId}`);
}

export const DependentQueriesPage = ({ email }) => {

  const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email));
  const channelId = user?.data?.channelId;
  const { data } = useQuery(['programs', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId
  })

  return <h1>Dependent queries</h1>
}