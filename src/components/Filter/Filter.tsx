import React from 'react';

import FilterProps, {filterBys, FilterValue, filterValues} from './Filter.types';

import './Filter.scss';

function Filter({
  filterValue = FilterValue.None,
  filterBy
}: FilterProps) {
  return (
    <div className="filter">
      <h2 className="filter__title">Фильтрация</h2>

      <div className="filter__select-label">
        Способ фильтрации
      </div>
      <select className="filter__select filter__select-filter-value">
        {Object.values(filterValues).map(item => (
          <option
            key={item.value}
            value={item.value}
            selected={filterValue === item.value}
          >
            {item.text}
          </option>
        ))}
      </select>

      <div className="filter__select-label">
        Критерий фильтрации
      </div>

      <select className="filter__select filter__select-filter-by">
        {Object.values(filterBys).map(item => (
          <option
            key={item.value}
            value={item.value}
            selected={filterBy === item.value}
          >
            {item.text}
          </option>
        ))}
      </select>

      <button type="submit" className="filter__button">Применить</button>
    </div>
  );
}

export default Filter;