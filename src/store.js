import { configureStore, createSlice } from '@reduxjs/toolkit';
import shoppingListReducer from './pages/List/shoppingListSlice';
import detailsReducer from './pages/Details/detailsSlice';
import editReducer from './pages/Edit/editSlice';
import newItemSlice from './pages/Create/newItemSlice';

const notification = createSlice({
  name: 'notification',
  initialState: {
    text: null,
  },
  reducers: {
    showNotification(state, action) {
      state.text = action.payload;
    },
    hideNotification(state) {
      state.text = null;
    },
  },
});

export const { showNotification, hideNotification } = notification.actions;

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    details: detailsReducer,
    edit: editReducer,
    newItem: newItemSlice,
    notification: notification.reducer,
  },
});

export default store;
