import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import apiClient from './apiClient';

const initialState = {
  status: 'uninitialized',
  users: [],
  id: null,
  name: '',
  description: '',
  assignedUserId: null,
  dueDate: '',
};

export const setUpEditForm = createAsyncThunk('edit/setUpFrom', async (id) => {
  const item = await apiClient.getItemById(id);
  const users = await apiClient.getUsers();

  return {
    item: item.data.data,
    users: users.data.data,
  };
});

export const saveEditForm = createAsyncThunk('edit/saveForm', async function (
  _,
  { getState }
) {
  const state = getState().edit;
  await apiClient.updateItemById(state.id, {
    name: state.name,
    description: state.description,
    dueDate: state.dueDate,
    assignedTo: {
      id: state.assignedUserId,
    },
  });
});

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    updateField(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    updateAssignee(state, action) {
      console.log(action);
      state.assignedUserId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUpEditForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setUpEditForm.fulfilled, (state, action) => {
        const { item, users } = action.payload;

        return {
          ...state,
          status: 'idle',
          id: item.id,
          name: item.name,
          description: item.description,
          dueDate: item.dueDate,
          assignedUserId: item.assignedTo.id,
          users,
        };
      })
      .addCase(setUpEditForm.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export const { updateField, updateAssignee } = editSlice.actions;

export default editSlice.reducer;
