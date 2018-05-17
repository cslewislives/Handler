import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Landing from './pages/Landing';
import Inventory from './pages/Inventory';
import {PrivateRoute, PropsRoute, LoggedOutRoute} from './components/Routes';
import Auth from './utils/Auth';
import Employees from "./pages/Employees";
import Regulars from "./pages/Regulars";
import Add from "./pages/Add";

class App extends Component {

  state = {
    authenticated: false
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({
      authenticated: Auth.isUserAuthenticated()
    })
  }

  render() {
    return (
      <div className='background'>
        <Router>
          <div>
            <PrivateRoute path='/regulars' component={Regulars} type='regulars' title='Regulars'/>
            <PrivateRoute path='/employees' component={Employees} type='employees' title='Employees'/>
            <PrivateRoute path='/add-item' component={Add}/>
            <PrivateRoute path='/inventory' component={Inventory}/>
            <PrivateRoute path="/dashboard" component={Landing}/>
            <PropsRoute exact path="/" component={Login} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
