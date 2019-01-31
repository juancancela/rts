import FilterOperationType from './FilterOperationType';

export default interface FilterCriteria {
  getFilterOperation(): FilterOperationType;
  getValue(): any;
  getValueId(): string;
}
