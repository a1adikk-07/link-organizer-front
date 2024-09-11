import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import cardsReducer from './linkCards/link-cards-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'linkCards',
  storage,
};

const rootReducer = combineReducers({
  linkCards: cardsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
