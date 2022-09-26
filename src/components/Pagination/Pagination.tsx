import React from 'react';

import PaginationItem from '../PaginationItem';

import PaginationProps from './Pagination.types';

import './Pagination.scss';

function Pagination({
  currentPage
}: PaginationProps) {

  const pages = [1, 2, 3];

  return (
    <div className="pagination">
      {pages.map(item => <PaginationItem key={item} page={item} isCurrent={item === currentPage} />)}
    </div>
  );
}

export default Pagination;