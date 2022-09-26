import React from 'react';
import classnames from 'classnames';

import PaginationItemProps from './PaginationItem.types';

import './PaginationItem.scss';

function PaginationItem({
  page,
  isCurrent
}: PaginationItemProps) {
  
  const paginationClassName = classnames(
    'pagination-item',
    {
      'pagination-item--current': isCurrent
    }
  );
  
  return (
    <div className={paginationClassName}>
      {page}
    </div>
  );
}

export default PaginationItem;