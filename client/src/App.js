import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login';

const App = () => (
  <Router>
    <div className='background'>
      <Route exact path='/' component={Login}/>
    </div>
  </Router>
)

export default App;
