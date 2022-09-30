import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState from './initialState';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    }
  }
});

export const {
  setCurrentPage
} = paginationSlice.actions;

export default paginationSlice.reducer;
