import FilterCriteria from './FilterCriteria';

/**
 * @description Filter
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Filter {
  getFilterCriterias(): FilterCriteria[];
}
