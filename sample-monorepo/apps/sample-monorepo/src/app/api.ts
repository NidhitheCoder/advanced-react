import axios from './axios';
import { ACCESS_TOKEN_KEY, API_ENDPOINTS } from './constants';
import { Post, User } from './types';

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

const getPosts = async () => {
  const authToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  const response = await axios.get(API_ENDPOINTS.posts, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data as Post[];
};

export { userRegister, getPosts, getPingStatus, userLogin };
