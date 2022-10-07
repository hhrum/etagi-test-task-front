import React, {ChangeEvent, useEffect, useState} from 'react';

import Button from '../Button';

import useAppSelector, {getFilterBy, getFilterValue} from '../../hooks/useAppSelector';

import {FilterBy, filterBys, FilterValue, filterValues} from './Filter.types';

import './Filter.scss';
import useAppDispatch from '../../hooks/useAppDispatch';
import {setFilterBy, setFilterValue} from '../../store/reducers/filter/FilterReducer';
import {setCurrentPage} from '../../store/reducers/pagination/PaginationReducer';

function Filter() {

  const dispatch = useAppDispatch();

  const filterValue = useAppSelector(getFilterValue);
  const filterBy = useAppSelector(getFilterBy);

  const [innerFilterValue, setInnerFilterValue] = useState<FilterValue>(FilterValue.None);
  const [innerFilterBy, setInnerFilterBy] = useState<FilterBy>(FilterBy.None);
  
  useEffect(() => {
    setInnerFilterValue(filterValue);
    setInnerFilterBy(filterBy);
  }, [filterValue, filterBy, setInnerFilterValue, setInnerFilterBy]);

  const valueChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    
    if (!Object.values(FilterValue).includes(+e.target.value)) {
      return;
    }

    setInnerFilterValue(+e.target.value);
  };
  
  const byChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {

    if (!Object.values(FilterBy).includes(+e.target.value)) {
      return;
    }

    setInnerFilterBy(+e.target.value);
  };
  
  const submitFilterHandler = () => {
    
    if (innerFilterBy != filterBy || innerFilterValue != filterValue) {
      dispatch(setCurrentPage(1));
    }
    
    dispatch(setFilterValue(innerFilterValue));
    dispatch(setFilterBy(innerFilterBy));
  };
  
  return (
    <div className="filter">
      <h2 className="filter__title">Фильтрация</h2>

      <div className="filter__select-label">
        Способ фильтрации
      </div>
      <select
        className="filter__select filter__select-filter-value"
        value={innerFilterValue}
        onChange={valueChangeHandler}
      >
        {Object.values(filterValues).map(item => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.text}
          </option>
        ))}
      </select>

      <div className="filter__select-label">
        Критерий фильтрации
      </div>

      <select
        className="filter__select filter__select-filter-by"
        value={innerFilterBy}
        onChange={byChangeHandler}
      >
        {Object.values(filterBys).map(item => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.text}
          </option>
        ))}
      </select>

      <Button
        content="Применить"
        className="filter__button"
        onClick={submitFilterHandler}
      />
    </div>
  );
}

export default Filter;