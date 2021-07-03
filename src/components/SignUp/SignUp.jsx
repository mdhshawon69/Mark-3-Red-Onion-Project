import React from 'react';
import {
  AlreadyHave,
  Form,
  Input,
  SignUpContainer,
  SignUpLogo,
  SubmitInput,
} from './SignUp.Elements';
import logo from '../../images/logo2.png';

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpLogo src={logo} />
      <Form>
        <Input type='text' placeholder='Name' />
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Input type='password' placeholder='Confirm Password' />
        <SubmitInput type='submit' value='Sign in' />
      </Form>
      <AlreadyHave to='/login'>Already have an account</AlreadyHave>
    </SignUpContainer>
  );
};

export default SignUp;
