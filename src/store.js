import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './pages/List/shoppingListSlice';
import detailsReducer from './pages/Details/detailsSlice';
import editReducer from './pages/Edit/editSlice';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    details: detailsReducer,
    edit: editReducer,
  },
});

export default store;
