import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import apiClient from './apiClient';

const initialState = {
  status: 'uninitialized',
  items: [],
};

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchShoppingList',
  async () => {
    const response = await apiClient.get('/items');

    return response.data.data;
  }
);

export const removeItemById = createAsyncThunk(
  'shoppingList/removeItemById',
  async (id) => {
    await apiClient.delete(`/items/${id}`);

    return { id };
  }
);

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.items = [...action.payload];
        state.status = 'idle';
      })
      .addCase(fetchShoppingList.rejected, (state) => {
        state.status = 'idle';
      });

    builder
      .addCase(removeItemById.pending, (state) => {
        state.status = 'deleting';
      })
      .addCase(removeItemById.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.status = 'idle';
      })
      .addCase(removeItemById.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export default shoppingListSlice.reducer;
