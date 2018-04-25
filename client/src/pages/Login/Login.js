import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {Col, Row, Container} from "../../components/Grid";
import Button from '../../components/Button';
import Jumbotron from "../../components/Jumbotron";
import { Input } from 'mdbreact';
import './Login.css';

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  render() {
    return (
      <Container>
        {/* <Jumbotron>
          <h1>Atlantic</h1>
        </Jumbotron> */}
        <Row>
          <Col size='md-8'>
            <h2 className="mb-5">Form login</h2>
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <Input
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"/>
              <Input label="Type your password" icon="lock" group type="password" validate/>
              <div className="text-center">
                <Button>Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Login;