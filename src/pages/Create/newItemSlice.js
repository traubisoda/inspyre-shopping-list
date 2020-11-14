import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../apiClient';

const initialState = {
  status: 'idle',
  savedItemId: null,
  name: '',
  description: '',
  dueDate: '',
  assignedUserId: null,
  users: [],
};

export const fetchUsers = createAsyncThunk('newItem/fetchUsers', async () => {
  const response = await apiClient.getUsers();

  return response.data.data;
});

export const saveNewItem = createAsyncThunk(
  'newItem/save',
  async (_, { getState, dispatch }) => {
    const { name, description, dueDate, assignedUserId } = getState().newItem;
    const response = await apiClient.createItem({
      name,
      description,
      dueDate,
      assignedTo: { id: assignedUserId },
    });

    return response.data.data;
  }
);

const newItemSlice = createSlice({
  name: 'newItem',
  initialState,
  reducers: {
    reset(state) {
      return initialState;
    },
    updateField(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(saveNewItem.pending, (state) => {
        state.status = 'saving';
      })
      .addCase(saveNewItem.fulfilled, (state, action) => {
        state.status = 'idle';
        state.savedItemId = action.payload.id;
      })
      .addCase(saveNewItem.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export const { updateField, reset } = newItemSlice.actions;

export default newItemSlice.reducer;
