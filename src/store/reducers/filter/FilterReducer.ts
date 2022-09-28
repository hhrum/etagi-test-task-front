import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {FilterBy, FilterValue} from '../../../components/Filter';
import initialState from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue(state, action: PayloadAction<FilterValue>) {
      state.value = action.payload;
    },
    
    setFilterBy(state, action: PayloadAction<FilterBy>) {
      state.by = action.payload;
    },
  }
});

export const {
  setFilterValue,
  setFilterBy,
} = filterSlice.actions;
export default filterSlice.reducer;