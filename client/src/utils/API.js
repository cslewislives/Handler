import axios from "axios";

//methods for interacting with API Auth routes
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
     axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),
  addItem: (type, data, token) => 
     axios.post(`/api/${type}`, data, {headers: {Authorization: `bearer ${token}`}}),
  getItems: (type, token) => 
     axios.get(`/api/${type}`, {headers: {Authorization: `bearer ${token}`}}),
  updateItem: (type, data, token) => 
     axios.post(`/api/${type}/${data.item}`, data, {headers: {Authorization: `bearer ${token}`}}),
  updateItemPar: (type, data, token) => 
     axios.post(`/api/${type}/${data.item}/par`, data, {headers: {Authorization: `bearer ${token}`}})
};
