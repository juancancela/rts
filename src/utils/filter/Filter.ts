import FilterCriteria from './FilterCriteria';

export default interface Filter {
  getFilterCriterias(): FilterCriteria[];
}
