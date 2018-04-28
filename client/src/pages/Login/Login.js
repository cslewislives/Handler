import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {
  Col,
  Container,
  Input,
  Card,
  Button,
  CardBody,
  CardImage
} from 'mdbreact';
import './Login.css';

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  render() {
    return (
      <Container>
          <Col md='4'>
            <Card wide id='signin' >
              <CardImage tag='div'>
                <div className='view card-header'>
                  <h2 className="h2-responsive text-center">Sign In</h2>
                </div>
              </CardImage>
              <CardBody>
                <form>
                  <Input
                    label="Username"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>
                  <Input label="Password" icon="lock" group type="password" validate/>
                  <div className="text-center">
                    <Button>Login</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
      </Container>
    )
  }
};

export default Login;