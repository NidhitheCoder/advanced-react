import axios from './axios';

export interface User {
  name: string;
  password: string;
  email: string;
}

const userRegister = async (user: User) => await axios.post('/signup', user);

const getPingStatus = async () => {
  const { data } = await axios.get('/');

  return data;
};

export { userRegister, getPingStatus };
