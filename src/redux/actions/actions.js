export const FILTER_FOODS = 'FILTER_FOODS';
export const ADD_FOOD_TO_CART = 'ADD_FOOD_TO_CART';

export const filterFoods = (category) => {
  return { type: FILTER_FOODS, category };
};

export const addToCart = (id) => {
  return { type: ADD_FOOD_TO_CART, id };
};
