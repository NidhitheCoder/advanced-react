import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 1000
});
export default instance;
