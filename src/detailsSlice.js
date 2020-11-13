import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from './apiClient';

const initialState = {
  status: 'uninitialized',
  item: null,
};

export const fetchItemById = createAsyncThunk('details/fetch', async (id) => {
  const response = await apiClient.get(`/items/${id}`);

  return response.data.data;
});

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
