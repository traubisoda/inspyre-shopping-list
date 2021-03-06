import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const methods = {
  getItems: () => client.get('/items'),
  getItemById: (id) => client.get(`/items/${id}`),
  deleteItemById: (id) => client.delete(`/items/${id}`),
  updateItemById: (id, data) => client.patch(`/items/${id}`, data),
  createItem: (data) => client.post('/items', data),
  getUsers: () => client.get('/users'),
};

export default methods;
