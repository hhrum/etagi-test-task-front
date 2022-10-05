import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false
  },
  reducers: {
    setLoader(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    }
  }
});

export const {
  setLoader
} = loaderSlice.actions;
export default loaderSlice.reducer;