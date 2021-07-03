import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavArea = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;

  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSignup = styled(Link)`
  padding: 10px 30px;
  background-color: #f91944;
  color: #fff;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #199950;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 15px;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const ButtonLogin = styled(Link)`
  background-color: #fff;
  padding: 10px 30px;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  @media screen and (max-width: 768px) {
    padding: 5px 15px;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const CartContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItemNumber = styled.h5`
  margin-left: 3px;
  color: #f91944;
  font-size: 15px;
  position: absolute;
  top: 15px;
`;

export const CartIcon = styled.span`
  font-size: 20px;
  color: #000;
`;

export const CartLink = styled(Link)`
  text-decoration: none;
`;
