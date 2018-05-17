import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';
import API from '../utils/API';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  state = {
    errors: {},
    successMessage: '',
    user: {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    this.setState({successMessage});
  }

  processForm = event => {

    event.preventDefault();

    // create a string for an HTTP body message
    const {username, password} = this.state.user;

    //const formData = `username=${username}&password=${password}`;
    API
      .login({username, password})
      .then(res => {
        // change the component-container state save the token
        Auth.authenticateUser(res.data.token);

        // update authenticated state
        this
          .props
          .toggleAuthenticateStatus()

        // redirect signed in user to dashboard
        this
          .props
          .history
          .push('/dashboard');
        this.setState({errors: {}});
      })
      .catch(({response}) => {

        const errors = response.data.errors
          ? response.data.errors
          : {};
        errors.summary = response.data.message;

        this.setState({errors});
      });

  }

  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({user});
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    )
  }
};

Login.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Login;