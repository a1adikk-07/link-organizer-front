import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

import linkCardsReducer from './linkCards/link-cards-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ["token"]
}

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  linkCards: linkCardsReducer,
  filter: filterReducer,
});

export default rootReducer;
