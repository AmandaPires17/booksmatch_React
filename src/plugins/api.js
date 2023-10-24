import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `http://191.52.55.53:19003/`,
});

export default api;