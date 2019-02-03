import Filter from './Filter';
import FilterCriteria from './FilterCriteria';

/**
 * @description FilterImpl
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class FilterImpl implements Filter {
  private filterCriterias: any[];

  constructor(filterCriterias?: FilterCriteria[]) {
    this.filterCriterias = filterCriterias;
  }

  getFilterCriterias(): FilterCriteria[] {
    return this.filterCriterias;
  }
}
