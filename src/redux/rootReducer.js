import { combineReducers } from '@reduxjs/toolkit';
import cardsReducer from './linkCards/link-cards-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  linkCards: cardsReducer,
  filter: filterReducer,
});

export default rootReducer;
