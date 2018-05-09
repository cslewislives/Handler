import axios from "axios";

//methods for interacting with API Auth routes
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),
  addGlass: glassData => 
     axios.post('/api/glass', glassData),
  getGlass: token =>
     axios.get('/api/glass', {headers: {Authorization: `bearer ${token}`}})
};
