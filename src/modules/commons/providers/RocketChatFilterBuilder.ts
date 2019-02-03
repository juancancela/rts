import FilterCriteriaImpl from '../../../utils/filter/FilterCriteriaImpl';
import FilterOperationType from '../../../utils/filter/FilterOperationType';
import Filter from '../../../utils/filter/Filter';
import FilterImpl from '../../../utils/filter/FilterImpl';
import QueryParams from '../../../utils/http/QueryParams';
import QueryParamsElement from '../../../utils/http/QueryParamsElement';

enum RocketChatQueryKeysType {
  OFFSET = 'offset',
  SORT = 'sort',
  QUERY = 'query'
}

/**
 * @description RocketChatFilterBuilder
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RocketChatFilterBuilder {
  static build(filter: Filter): string {
    filter = Object.assign(new FilterImpl(), filter);
    const queryParams = new QueryParams();
    const query = {};
    filter.getFilterCriterias().forEach(filterCriteria => {
      filterCriteria = Object.assign(new FilterCriteriaImpl(), filterCriteria);
      switch (filterCriteria.getFilterOperation()) {
        case FilterOperationType.OFFSET:
          queryParams.addQueryParamsElement(
            new QueryParamsElement(RocketChatQueryKeysType.OFFSET, filterCriteria.getValues()[0])
          );
          break;
        case FilterOperationType.SORT:
          queryParams.addQueryParamsElement(
            new QueryParamsElement(RocketChatQueryKeysType.SORT, filterCriteria.getValues()[0])
          );
          break;
        case FilterOperationType.REGEX:
          query[filterCriteria.getKey()] = { $regex: filterCriteria.getValues().toString() };
          break;
        case FilterOperationType.DIFFERENT_THAN:
        case FilterOperationType.EQUALS_TO:
        case FilterOperationType.FEWER_THAN:
        case FilterOperationType.GREATER_THAN:
        case FilterOperationType.LIMIT:
          throw new Error('Filter not yet implemented');
        default:
          throw new Error('Filter not valid');
      }
    });
    Object.keys(query).length > 0
      ? queryParams.addQueryParamsElement(new QueryParamsElement(RocketChatQueryKeysType.QUERY, query))
      : '';
    return queryParams.toQueryParamsString();
  }
}
