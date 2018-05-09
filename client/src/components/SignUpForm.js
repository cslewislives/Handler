import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  Col,
  Container,
  Input,
  Card,
  Button,
  CardBody,
  CardImage,
  CardText
} from 'mdbreact';

const SignUpForm = ({onSubmit, onChange, errors, user}) => (
  <Container>
    <Col md='4'>
      <Card wide id='signup'>
        <CardImage tag='div'>
          <div className='view card-header'>
            <h2 className="h2-responsive text-center">Sign Up</h2>
            {errors.summary && <p className="error-message">{errors.summary}</p>}
          </div>
        </CardImage>
        <CardBody>
          <form action="/" onSubmit={onSubmit}>
            <Input
              label="First Name"
              icon="user"
              group
              type="text"
              validate
              success="right"
              name="firstName"
              error={errors.firstName}
              onChange={onChange}
              value={user.firstName}/>
            <Input
              label="Last Name"
              name="lastName"
              icon="user"
              group
              type="text"
              validate
              success="right"
              error={errors.lastName}
              onChange={onChange}
              value={user.lastName}/>
            <Input
              label="Username"
              name="username"
              icon="user"
              group
              type="text"
              validate
              success="right"
              error={errors.username}
              onChange={onChange}
              value={user.username}/>
            <Input
              label="Password"
              name="password"
              icon="lock"
              group
              type="password"
              validate
              onChange={onChange}
              error={errors.password}
              value={user.password}/>
            <div className="text-center">
              <Button type='submit'>Sign Up</Button>
            </div>
            <CardText>Already have an account?
              <Link to={'/login'}>Log in</Link>
            </CardText>
          </form>
        </CardBody>
      </Card>
    </Col>
  </Container>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;