import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../CartItems/CartItems';
import {
  CartContainer,
  DeliveryForm,
  Form,
  DeliveryInput,
  DeliverySubmit,
  DeliveryTextArea,
  DeliveryTitle,
  DeliveryDetails,
  SubText,
  CommonContainer,
  CartFoodItems,
  MainText,
  OrderPlaceBtn,
} from './Cart.elements';

const Cart = (props) => {
  const { cart } = props;

  return (
    <CartContainer>
      <DeliveryForm>
        <DeliveryTitle>edit delivery details</DeliveryTitle>
        <hr />
        <Form>
          <DeliveryInput type='text' placeholder='Where to deliver' />
          <DeliveryInput type='text' placeholder='Address' />
          <DeliveryInput type='text' placeholder='Flat, suite or floor' />
          <DeliveryInput type='text' placeholder='Business Name' />
          <DeliveryTextArea placeholder='Add Delivery Instructions' />
          <DeliverySubmit type='submit' value='Save & Continue' />
        </Form>
      </DeliveryForm>
      <DeliveryDetails>
        <CommonContainer>
          <SubText>From</SubText>
          <MainText>gulshan plaza restaurant GPR</MainText>
        </CommonContainer>
        <SubText>arriving in 20-30 min</SubText>
        <SubText>107 Rd No 8</SubText>
        <CartFoodItems cart={cart}>
          {cart.map((item) => (
            <CartItems item={item} />
          ))}
        </CartFoodItems>
        <SubText>Subtotal : {cart.length}</SubText>
        <SubText>Tax :</SubText>
        <SubText>Delivery Fee :</SubText>
        <MainText mar={true}>Total :</MainText>
        <OrderPlaceBtn to={cart.length ? '/order-placed' : '#'} cart={cart}>
          Place Order
        </OrderPlaceBtn>
      </DeliveryDetails>
    </CartContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
