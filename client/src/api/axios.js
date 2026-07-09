import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mern-portfolio-psi-nine.vercel.app/api',
});

export default API;