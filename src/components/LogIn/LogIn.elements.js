import styled from 'styled-components';
import banner from '../../images/bannerbackground.png';
import { Link } from 'react-router-dom';

export const LogInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 120px;
  padding-top: 40px;
  background-image: url(${banner});
  height: 90vh;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled.form`
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const Input = styled.input`
  padding: 20px;
  border: none;
  background-color: #f9f9f9;
  color: #919191;
  margin-bottom: 20px;
  outline: none;
  border-radius: 4px;
`;
export const SubmitInput = styled.input`
  padding: 20px 50px;
  border: none;
  background-color: #f91944;
  color: #fff;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LogInLogo = styled.img`
  height: 60px;
  width: auto;
  margin: 30px;
`;

export const DoNotHave = styled(Link)`
  font-size: 14px;
  color: #f91944;
  text-align: center;
  text-decoration: none;
`;
