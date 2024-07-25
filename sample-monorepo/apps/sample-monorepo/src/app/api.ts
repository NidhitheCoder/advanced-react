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

const getPosts = async () => {
  const posts = await axios.post(API_ENDPOINTS.posts);
  console.log(posts);

  return posts;
};

export { userRegister, getPosts, getPingStatus, userLogin };
