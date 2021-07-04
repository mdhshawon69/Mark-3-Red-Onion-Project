import { foods } from '../../Foods/foods';
import {
  ADD_FOOD_TO_CART,
  DECREASE_FOOD_NUMBER,
  FILTER_FOODS,
  INCREASE_FOOD_NUMBER,
} from '../actions/actions';

const initialFoods = foods.slice(6, 12);
const initialState = {
  cart: [],
  foodItems: [...foods],
  selectedFood: initialFoods,
  increasedOrDecreased: [],
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_FOODS:
      const category = action.category;
      const filteredFood = state.foodItems.filter(
        (food) => food.category === category
      );
      return {
        ...state,
        selectedFood: filteredFood,
      };
    case ADD_FOOD_TO_CART:
      const newCart = [...state.cart, ...state.increasedOrDecreased];
      return { ...state, cart: newCart, increasedOrDecreased: [] };

    case INCREASE_FOOD_NUMBER:
      const IncreaserId = action.id;
      const increasedFood = state.selectedFood.find(
        (food) => food.id === IncreaserId
      );
      const newIncreased = [...state.increasedOrDecreased, increasedFood];
      return { ...state, increasedOrDecreased: newIncreased };

    case DECREASE_FOOD_NUMBER:
      state.increasedOrDecreased.pop();
      return {
        ...state,
        increasedOrDecreased: [...state.increasedOrDecreased],
      };
    default:
      return state;
  }
};
