
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://usermanagementbackend-eeit.onrender.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('x-access-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;