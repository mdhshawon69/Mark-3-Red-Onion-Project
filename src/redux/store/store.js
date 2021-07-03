import { createStore } from 'redux';
import { foodReducer } from '../reducers/reducers';

export const store = createStore(foodReducer);
