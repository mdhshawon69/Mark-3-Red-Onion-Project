/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';
import { foods } from '../../Foods/foods';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
  DetailsContainer,
  DetailsHeading,
  DetailsTextArea,
  DetailsText,
  DetailsPrice,
  PricingContainer,
  ShownNumber,
  PricingCounter,
  Decreaser,
  Increaser,
  DetailsImage,
  AddButton,
} from './FoodDetails.elements';
import { useState } from 'react';

const FoodDetails = () => {
  const [quantity, setQuantity] = useState([]);
  const { foodId } = useParams();
  const foodDetails = foods.find((food) => food.id == foodId);
  const { title, details, price, image, id } = foodDetails;

  const handleIncrease = (id) => {
    const newQuantity = foods.filter((item) => item.id === id);
    setQuantity(newQuantity);
  };

  const handleDecrease = (id) => {
    const newQuantity = quantity.filter((item) => item.id !== id);
    setQuantity(newQuantity);
  };

  const handleAddToCart = (id) => {
    const newCart = foods.filter((item) => item.id === id);
    setQuantity(newCart);
  };

  return (
    <div>
      <DetailsContainer>
        <DetailsTextArea>
          <DetailsHeading>{title}</DetailsHeading>
          <DetailsText>{details}</DetailsText>
          <PricingContainer>
            <DetailsPrice>${price}</DetailsPrice>
            <PricingCounter>
              <Decreaser onClick={() => handleDecrease(id)}>-</Decreaser>
              <ShownNumber>{quantity.length}</ShownNumber>
              <Increaser onClick={() => handleIncrease(id)}>+</Increaser>
            </PricingCounter>
          </PricingContainer>
          <AddButton onClick={() => handleAddToCart(id)}>
            <AiOutlineShoppingCart style={{ marginRight: '5px' }} />
            Add
          </AddButton>
        </DetailsTextArea>
        <DetailsImage src={image} alt={title} />
      </DetailsContainer>
    </div>
  );
};

export default FoodDetails;
