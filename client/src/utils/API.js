import axios from "axios";

//methods for interacting with API Auth routes
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
     axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),
  getGlass: token =>
     axios.get('/api/glass', {headers: {Authorization: `bearer ${token}`}}),
  updateGlass: (glassData, token) => 
     axios.post(`/api/glass/${glassData.glass}`, glassData, {headers: {Authorization: `bearer ${token}`}}),
  updatePar: (glassData, token) => 
     axios.post(`/api/glass/${glassData.glass}`, glassData, {headers: {Authorization: `bearer ${token}`}})
};
