import React from 'react';
import {
  CardTitle,
  CardImage,
  CardSubTitle,
  CardPrice,
  CardItem,
  CardLink,
} from './FoodCard.elements';

const FoodCard = ({ food }) => {
  const { title, image, info, price, id } = food;
  return (
    <div>
      <CardLink to={`/details/${id}`}>
        <CardItem>
          <CardImage src={image} />
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{info}</CardSubTitle>
          <CardPrice>${price}</CardPrice>
        </CardItem>
      </CardLink>
    </div>
  );
};

export default FoodCard;
