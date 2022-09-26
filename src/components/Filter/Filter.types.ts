enum FilterValue {
  None,
  ASC,
  DESC
}

export const filterValues = {
  [FilterValue.None]: {
    value: FilterValue.None,
    text: 'Не использовать фильтрацию'
  },
  [FilterValue.ASC]: {
    value: FilterValue.ASC,
    text: 'Фильтрация по возрастанию'
  },
  [FilterValue.DESC]: {
    value: FilterValue.DESC,
    text: 'Фильтрация по убавнию'
  }
};

enum FilterBy {
  None,
  Title,
  Complete,
  StartDate,
  FinishDate
}

export const filterBys = {
  [FilterBy.None]: {
    value: FilterBy.None,
    text: 'Не выбрано'
  },
  [FilterBy.Title]: {
    value: FilterBy.Title,
    text: 'По названию'
  },
  [FilterBy.Complete]: {
    value: FilterBy.Complete,
    text: 'По завершенности'
  },
  [FilterBy.StartDate]: {
    value: FilterBy.StartDate,
    text: 'По дате начала'
  },
  [FilterBy.FinishDate]: {
    value: FilterBy.FinishDate,
    text: 'По дате окончания'
  },
};
  
interface FilterProps {
  filterValue: FilterValue
  filterBy: FilterBy
}

export default FilterProps;
export {
  FilterValue,
  FilterBy
};