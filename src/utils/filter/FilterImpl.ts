import Resource from '../resource/Resource';
import Filter from './Filter';
import FilterCriteria from './FilterCriteria';

export default class FilterImpl implements Filter, Resource {
  private filterCriterias: any[];

  constructor(filterCriterias: any[]) {
    this.filterCriterias = filterCriterias;
  }

  getFilterCriterias(): FilterCriteria[] {
    return this.filterCriterias;
  }

  getId(): string {
    //TBD
    return '0';
  }
}
