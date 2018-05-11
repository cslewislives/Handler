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
  updateGlassPar: (glassData, token) => 
     axios.post(`/api/glass/${glassData.glass}/par`, glassData, {headers: {Authorization: `bearer ${token}`}}),
  getSilver: token => 
     axios.get(`/api/silver`, {headers: {Authorization: `bearer ${token}`}}),
  updateSilver: (silverData, token) => 
     axios.post(`/api/silver/${silverData.silver}`, silverData, {headers: {Authorization: `bearer ${token}`}}),
  updateSilverPar: (silverData, token) => 
     axios.post(`/api/silver/${silverData.silver}/par`, silverData, {headers: {Authorization: `bearer ${token}`}}),
  getWine: token => 
     axios.get(`/api/wine`, {headers: {Authorization: `bearer ${token}`}}),
  updateWine: (wineData, token) => 
     axios.post(`/api/wine/${wineData.wine}`, wineData, {headers: {Authorization: `bearer ${token}`}}),
  updateWinePar: (wineData, token) => 
     axios.post(`/api/wine/${wineData.wine}/par`, wineData, {headers: {Authorization: `bearer ${token}`}})
};
