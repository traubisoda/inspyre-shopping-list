import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../apiClient';

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
  { getState, dispatch }
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

  setTimeout(() => {
    dispatch({ type: 'edit/idle' });
  }, 3000);
});

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    idle(state) {
      state.status = 'idle';
    },
    updateField(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    updateAssignee(state, action) {
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

    builder
      .addCase(saveEditForm.pending, (state) => {
        state.status = 'saving';
      })
      .addCase(saveEditForm.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(saveEditForm.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { updateField, updateAssignee } = editSlice.actions;

export default editSlice.reducer;
