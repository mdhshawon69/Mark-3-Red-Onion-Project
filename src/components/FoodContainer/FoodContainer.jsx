import React, { useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import { foods } from '../../Foods/foods';
import { selectedFood } from '../../Foods/foods';
import {
  FoodNav,
  FoodNavContainer,
  FoodNavItem,
  FoodNavLink,
  FoodItemsContainer,
  CheckOutBtn,
} from './FoodContainer.elements';

const FoodContainer = () => {
  const [seletedFoods, setSelectedFoods] = useState(selectedFood);

  const filterFoods = (category) => {
    const newSelectedFoods = foods.filter(
      (foodItem) => foodItem.category === category
    );
    setSelectedFoods(newSelectedFoods);
  };
  return (
    <div>
      <FoodNavContainer>
        <FoodNav>
          <FoodNavItem>
            <FoodNavLink onClick={() => filterFoods('breakfast')}>
              BREAKFAST
            </FoodNavLink>
          </FoodNavItem>
          <FoodNavItem>
            <FoodNavLink onClick={() => filterFoods('lunch')}>
              LUNCH
            </FoodNavLink>
          </FoodNavItem>
          <FoodNavItem>
            <FoodNavLink onClick={() => filterFoods('dinner')}>
              DINNER
            </FoodNavLink>
          </FoodNavItem>
        </FoodNav>
      </FoodNavContainer>
      <FoodItemsContainer>
        {seletedFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
        <CheckOutBtn>Checkout your food</CheckOutBtn>
      </FoodItemsContainer>
    </div>
  );
};

export default FoodContainer;
