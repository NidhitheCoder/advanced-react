import { User } from './types';

const INITIAL_USER: User = {
  password: '',
  email: '',
};

const ROUTES = {
  home: '/',
  dashboard: '/dashboard',
  posts: '/posts',
  singlePost: '/posts/:id',
  createPost: '/posts/create',
  notFound: '*',
};

const API_ENDPOINTS = {
  signup: '/auth/signup',
  login: '/auth/login',
  ping: '/ping',
  posts: '/posts',
  post: (id: string) => `/posts/${id}`,
};

const ACCESS_TOKEN_KEY = 'access_token';
const USER_NAME_KEY = 'user_name';

export { ACCESS_TOKEN_KEY, API_ENDPOINTS, INITIAL_USER, ROUTES, USER_NAME_KEY };
