export const FILTER_FOODS = 'FILTER_FOODS';
export const ADD_FOOD_TO_CART = 'ADD_FOOD_TO_CART';
export const INCREASE_FOOD_NUMBER = 'INCREASE_FOOD_NUMBER';
export const DECREASE_FOOD_NUMBER = 'DECREASE_FOOD_NUMBER';

export const filterFoods = (category) => {
  return { type: FILTER_FOODS, category };
};

export const addToCart = (id) => {
  return { type: ADD_FOOD_TO_CART, id };
};

export const increaser = (id) => {
  return { type: INCREASE_FOOD_NUMBER, id };
};

export const decreaser = () => {
  return { type: DECREASE_FOOD_NUMBER };
};
