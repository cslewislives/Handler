import React from 'react';
import PropTypes from 'prop-types';
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

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
    <Container>
      <Row>
        <Col md='6' id='sign-col'>
          <Card wide id='signin' className='d-flex h-80'>
            <CardImage tag='div'>
              <div className='view card-header'>
                <h2 className="h2-responsive text-center">Sign In</h2>
              </div>
            </CardImage>
            <CardBody>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errors.summary && <p className="error-message">{errors.summary}</p>}
              <form onSubmit={onSubmit}>
                <Input
                  label="Username"
                  name="username"
                  icon="user"
                  group
                  type="text"
                  validate
                  error={errors.username}
                  success="right"
                  value={user.username}
                  onChange={onChange}/>
                {errors.username && <p className="error-message">{errors.username}</p>}
                <Input
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  name="password"
                  validate
                  value={user.password}
                  error={errors.password}
                  onChange={onChange}/>
                {errors.password && <p className="error-message">{errors.password}</p>}
                <div className="text-center">
                  <Button type='submit' color='primary'>Login</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;