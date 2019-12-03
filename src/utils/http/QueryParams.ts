import QueryParamsElement from './QueryParamsElement';

/**
 * @description QueryParams
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class QueryParams {
  private queryParamsElements: QueryParamsElement[];

  constructor(queryParamsElements?: QueryParamsElement[]) {
    this.queryParamsElements = queryParamsElements;
  }

  addQueryParamsElement(queryParamsElement: QueryParamsElement): void {
    if (!this.queryParamsElements) this.queryParamsElements = [];
    this.queryParamsElements.push(queryParamsElement);
  }

  toQueryParamsString(): string {
    if (!this.queryParamsElements || this.queryParamsElements.length === 0) return '';
    let queryParamsString = '?';
    this.queryParamsElements.forEach(queryParamsElement => {
      let item = `${queryParamsElement.getKey()}=${queryParamsElement.getValue()}&`;
      queryParamsString += item;
    });
    //remove trailing & at the end of the queryParamsString
    return queryParamsString.slice(0, -1);
  }
}
