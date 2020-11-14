import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../apiClient';

const initialState = {
  status: 'uninitialized',
  item: null,
};

export const getItemById = async (itemId) => {
  const response = await apiClient.getItemById(itemId);

  return response.data.data;
};

export const fetchItemById = createAsyncThunk('details/fetch', getItemById);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchItemById.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export default detailsSlice.reducer;
