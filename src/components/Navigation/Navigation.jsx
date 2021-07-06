import React from 'react';
import {
  ButtonArea,
  Logo,
  LogoArea,
  NavArea,
  ButtonSignup,
  ButtonLogin,
  CartContainer,
  CartItemNumber,
  CartIcon,
  CartLink,
} from './Navigation.elements';
import { Container } from '../GlobalStyles';
import logo from '../../images/logo2.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = (props) => {
  const { cart } = props;
  return (
    <NavArea>
      <Container>
        <Link to='/'>
          <LogoArea>
            <Logo src={logo} />
          </LogoArea>
        </Link>
        <ButtonArea>
          <CartLink to='/cart'>
            <CartContainer>
              <CartIcon>
                <AiOutlineShoppingCart />
              </CartIcon>
              <CartItemNumber>{cart.length}</CartItemNumber>
            </CartContainer>
          </CartLink>
          <ButtonLogin to='/login'>Log In</ButtonLogin>
          <ButtonSignup to='/signup'>Sign Up</ButtonSignup>
        </ButtonArea>
      </Container>
    </NavArea>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
