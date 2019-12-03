import FilterCriteria from './FilterCriteria';
import FilterOperationType from './FilterOperationType';

/**
 * @description FilterCriteriaImpl
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class FilterCriteriaImpl implements FilterCriteria {
  private filterOperation: FilterOperationType;
  private values: string[];
  private key: string;

  constructor(filterOperation?: FilterOperationType, values?: string[], key?: string) {
    this.filterOperation = filterOperation;
    this.values = values;
    this.key = key;
  }

  getFilterOperation(): FilterOperationType {
    return this.filterOperation;
  }

  getValues(): string[] {
    return this.values;
  }

  getKey(): string {
    return this.key;
  }
}
