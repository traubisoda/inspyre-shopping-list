import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../apiClient';

const initialState = {
  status: 'uninitialized',
  deletingItemId: null,
  items: [],
};

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetchShoppingList',
  async () => {
    const response = await apiClient.getItems();

    return response.data.data;
  }
);

export const removeItemById = createAsyncThunk(
  'shoppingList/removeItemById',
  async (id) => {
    await apiClient.deleteItemById(id);

    return { id };
  }
);

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    selectItemToDelete(state, action) {
      state.deletingItemId = action.payload;
      state.status = 'deleting';
    },
    cancelDelete(state) {
      state.status = 'idle';
      state.deletingItemId = null;
    },
  },
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
        state.deletingItemId = null;
      })
      .addCase(removeItemById.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export const { selectItemToDelete, cancelDelete } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
