import React from 'react';
import {
  CartItemDetails,
  CartItem,
  CartItemImage,
  CartItemTitle,
  CartItemPrice,
  CartItemDeliveryText,
  PricingCounter,
  Increaser,
  ShownNumber,
  Decreaser,
} from './CartItems.elements';

const CartItems = ({ item }) => {
  const { title, image, price } = item;
  return (
    <CartItem>
      <CartItemImage src={image} alt={title} />
      <CartItemDetails>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>${price}</CartItemPrice>
        <CartItemDeliveryText>Free delivery</CartItemDeliveryText>
      </CartItemDetails>
      <PricingCounter>
        <Decreaser>-</Decreaser>
        <ShownNumber>0</ShownNumber>
        <Increaser>+</Increaser>
      </PricingCounter>
    </CartItem>
  );
};

export default CartItems;
