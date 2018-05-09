import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import Landing from './pages/Landing';
import Inventory from './pages/Inventory';
import {PrivateRoute, PropsRoute, LoggedOutRoute} from './components/Routes';
import Auth from './utils/Auth';

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
            <Route path='/inventory' component={Inventory}/>
            <PropsRoute exact path="/" component={Landing} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PrivateRoute path="/dashboard" component={Landing}/>
            <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
