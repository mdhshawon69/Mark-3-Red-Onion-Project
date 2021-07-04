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
import { addToCart, decreaser, increaser } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const FoodDetails = (props) => {
  const { addToCart, increaser, foodQuantity, decreaser } = props;
  const { foodId } = useParams();
  const foodDetails = foods.find((food) => food.id == foodId);
  const { title, details, price, image, id } = foodDetails;

  return (
    <div>
      <DetailsContainer>
        <DetailsTextArea>
          <DetailsHeading>{title}</DetailsHeading>
          <DetailsText>{details}</DetailsText>
          <PricingContainer>
            <DetailsPrice>
              ${foodQuantity.length ? price * foodQuantity.length : price}
            </DetailsPrice>
            <PricingCounter>
              <Decreaser onClick={() => decreaser()}>-</Decreaser>
              <ShownNumber>{foodQuantity.length}</ShownNumber>
              <Increaser onClick={() => increaser(id)}>+</Increaser>
            </PricingCounter>
          </PricingContainer>
          <AddButton onClick={() => addToCart(id)}>
            <AiOutlineShoppingCart style={{ marginRight: '5px' }} />
            Add
          </AddButton>
        </DetailsTextArea>
        <DetailsImage src={image} alt={title} />
      </DetailsContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { foodQuantity: state.increasedOrDecreased };
};

const mapDispatchToProps = {
  addToCart: addToCart,
  increaser: increaser,
  decreaser: decreaser,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
