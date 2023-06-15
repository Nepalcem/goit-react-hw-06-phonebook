import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterItems(state, action) {
      return action.payload;
    },
  },
});

export const { filterItems } = filterSlice.actions;
