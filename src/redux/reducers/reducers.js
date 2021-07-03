import { foods } from '../../Foods/foods';
import { FILTER_FOODS } from '../actions/actions';

const initialFoods = foods.slice(6, 12);
const initialState = {
  cart: [],
  foodItems: foods,
  selectedFood: initialFoods,
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_FOODS:
      console.log(state.foods);
      const category = action.category;
      const selectedFood = state.foods.filter(
        (food) => food.category === category
      );
      return {
        foods: state.foodItems,
        cart: state.cart,
        selectedFood: selectedFood,
      };
    default:
      return { state };
  }
};
