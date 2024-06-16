import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
console.log(import.meta.env);

const instance = axios.create({
  baseURL,
});

export default instance;
