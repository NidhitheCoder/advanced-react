import axios from './axios';
import { API_ENDPOINTS } from './constants';
import { User } from './types';

const userRegister = async (user: User) =>
  await axios.post(API_ENDPOINTS.signup, user);

const getPingStatus = async () => {
  const { data } = await axios.get(API_ENDPOINTS.ping);

  return data;
};

const userLogin = async (user: User) => {
  const { data } = await axios.post(API_ENDPOINTS.login, user);

  return data;
};

export { userRegister, getPingStatus, userLogin };
