import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://frontend-assessment-api.herokuapp.com/',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export default client;
