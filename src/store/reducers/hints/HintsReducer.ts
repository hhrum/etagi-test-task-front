import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IHint} from './HintReducer.types';
import initialState from './initialState';

const hintsSlice = createSlice({
  name: 'hints',
  initialState,
  reducers: {
    setHints(state, action: PayloadAction<IHint[]>) {
      state.data = action.payload;
    }
  }
});

const initHintsAction = createAction('hints/init');
const pushHintAction = createAction<IHint>('hints/push');
const completeHintAction = createAction<string>('hints/complete');

export const {
  setHints
} = hintsSlice.actions;

export {
  initHintsAction,
  pushHintAction,
  completeHintAction,
};

export default hintsSlice.reducer;