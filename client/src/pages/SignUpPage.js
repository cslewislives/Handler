import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm';
import API from '../utils/API';
import {Container} from 'mdbreact';

class SignUpPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    user: {
      username: '',
      firstName: '',
      lastName: '',
      password: ''
    }
  }

  processForm = event => {

    event.preventDefault();
    
    // create a string for an HTTP body message
    const { firstName, lastName, username, password } = this.state.user;

    //const formData = `username=${username}&password=${password}`;
    API.signUp({firstName, lastName, username, password}).then(res => {
      // change the component-container state
        // set a message
        localStorage.setItem('successMessage', res.data.message);

        // redirect user after sign up to login page
        this.props.history.push('/login');
        this.setState({
          errors: {}
        });

    }).catch(( {response} ) => {

        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        this.setState({
          errors
        });
      });
  }

  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
