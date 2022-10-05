import React, {useEffect} from 'react';

import PaginationItem from '../PaginationItem';

import './Pagination.scss';
import useAppSelector, {getCurrentPage, getTotalPages} from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import {setCurrentPage} from '../../store/reducers/pagination/PaginationReducer';

function Pagination() {
  
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(getCurrentPage);
  const totalPages = useAppSelector(getTotalPages);

  useEffect(() => {
    if (totalPages < currentPage) {
      dispatch(setCurrentPage(totalPages || 1));
    }
  }, [totalPages, currentPage]);
  
  if (totalPages <= 1) {
    return null;
  }

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