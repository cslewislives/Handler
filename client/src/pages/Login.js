import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {
  Col,
  Container,
  Input,
  Card,
  Button,
  CardBody,
  CardImage,
  Row
} from 'mdbreact';
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';
import API from '../utils/API';

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
    console.log(user);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md='6' id='sign-col'>
            <Card wide id='signin'>
              <CardImage tag='div'>
                <div className='view card-header'>
                  <h2 className="h2-responsive text-center">Sign In</h2>
                </div>
              </CardImage>
              <CardBody>
                <form>
                  <Input
                    label="Username"
                    name="username"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.user.username}
                    onChange={this.changeUser}/>
                  <Input
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    name="password"
                    validate
                    value={this.state.user.password}
                    onChange={this.changeUser}/>
                  <div className="text-center">
                    <Button onClick={this.processForm}>Login</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
};

Login.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Login;