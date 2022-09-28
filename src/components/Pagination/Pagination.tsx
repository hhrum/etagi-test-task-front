import React from 'react';

import PaginationItem from '../PaginationItem';

import './Pagination.scss';
import useAppSelector, {getCurrentPage, getTotalPages} from '../../hooks/useAppSelector';

function Pagination() {
  
  const currentPage = useAppSelector(getCurrentPage);
  const totalPages = useAppSelector(getTotalPages);

  return (
    <div className="pagination">
      {(new Array(totalPages)).fill(null).map((_, i) =>
        <PaginationItem
          key={i + 1}
          page={i + 1}
          isCurrent={i + 1 === currentPage}
        />
      )}
    </div>
  );
}

export default Pagination;