import { combineReducers } from '@reduxjs/toolkit';
import linkCardsReducer from './linkCards/link-cards-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  linkCards: linkCardsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export default rootReducer;
