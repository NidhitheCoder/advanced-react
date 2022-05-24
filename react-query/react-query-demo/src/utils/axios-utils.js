import axios from 'axios';

// Create axios client
const client = axios.create({ baseURL: 'http://localhost:4000'});

// Define and export a function that wraps all axios requests
export const request = ({...options}) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = response => response;
  const onError = error =>  {
    // Optionally catch errors and additional logging here
    return error;
  }
  return client(options).then(onSuccess).catch(onError);
}