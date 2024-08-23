import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products/';

export const getProducts = () => {
  return axios.get(API_URL)
    .then(response => response.data);
};
