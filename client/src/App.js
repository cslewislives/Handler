import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Inventory from './pages/Inventory';

const App = () => (
  <Router>
    <div className='background'>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Landing}/>
        <Route path='/inventory' component={Inventory}/>
      </Switch>
    </div>
  </Router>
)

export default App;
