import React from 'react';
import {
  LogInContainer,
  Form,
  Input,
  SubmitInput,
  LogInLogo,
  DoNotHave,
} from './LogIn.elements';
import logo from '../../images/logo2.png';

const LogIn = () => {
  return (
    <LogInContainer>
      <LogInLogo src={logo} />
      <Form>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <SubmitInput type='submit' value='Sign in' />
      </Form>
      <DoNotHave to='/signup'>Don't have an account? Sign Up Now!</DoNotHave>
    </LogInContainer>
  );
};

export default LogIn;
