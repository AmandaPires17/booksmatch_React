import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  // baseURL: `http://${MY_IP}:19003/`,
  baseURL: `https://booksmatch.3.us-1.fl0.io/`,
});

export default api;