import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './shoppingListSlice';
import detailsReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    details: detailsReducer,
  },
});

export default store;
