import {FilterBy, FilterValue} from '../../../components/Filter';
import IFilterSlice from './FilterReducer.types';

const initialState = {
  value: FilterValue.None,
  by: FilterBy.None,
} as IFilterSlice;

export default initialState;