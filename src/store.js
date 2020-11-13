import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './shoppingListSlice';
import detailsReducer from './detailsSlice';
import editReducer from './editSlice';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    details: detailsReducer,
    edit: editReducer,
  },
});

export default store;
