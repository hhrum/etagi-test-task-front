import React from 'react';
import classnames from 'classnames';

import Ripple from '../Ripple';

import PaginationItemProps from './PaginationItem.types';

import './PaginationItem.scss';
import useAppDispatch from '../../hooks/useAppDispatch';
import {setCurrentPage} from '../../store/reducers/tasks/TasksReducer';

function PaginationItem({
  page,
  isCurrent
}: PaginationItemProps) {

  const dispatch = useAppDispatch();
  
  const paginationClassName = classnames(
    'pagination-item',
    {
      'pagination-item--current': isCurrent
    }
  );

  const clickHandler = () => {
    dispatch(setCurrentPage(page));
  };
  
  return (
    <div
      onClick={clickHandler}
      className={paginationClassName}
    >
      {page}

      <Ripple />
    </div>
  );
}

export default PaginationItem;