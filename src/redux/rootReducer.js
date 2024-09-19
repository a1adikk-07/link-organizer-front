import { combineReducers } from '@reduxjs/toolkit';
import linkCardsReducer from './linkCards/link-cards-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  linkCards: linkCardsReducer,
  filter: filterReducer,
});

export default rootReducer;
