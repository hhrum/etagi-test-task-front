import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {RootState} from '../store/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getTasks = (state: RootState) => state.tasks.data; 
const getTaskById = (id: number) => (state: RootState) => state.tasks.data.find(task => task.id === id);

export default useAppSelector;
export {
  getTasks,
  getTaskById
};