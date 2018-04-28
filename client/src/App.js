import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Inventory from './pages/Inventory';

const App = () => (
  <div className='background'>
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Landing}/>
        <Route path='/inventory' component={Inventory}/>
      </Switch>
    </Router>
  </div>
)

export default App;
