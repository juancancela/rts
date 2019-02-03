import FilterOperationType from './FilterOperationType';

/**
 * @description FilterCriteria
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface FilterCriteria {
  getFilterOperation(): FilterOperationType;
  getValues(): string[];
  getKey(): string;
}
