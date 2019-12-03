import FilterCriteriaImpl from '../../../utils/filter/FilterCriteriaImpl';
import FilterOperationType from '../../../utils/filter/FilterOperationType';
import Filter from '../../../utils/filter/Filter';
import FilterImpl from '../../../utils/filter/FilterImpl';
import QueryParams from '../../../utils/http/QueryParams';
import QueryParamsElement from '../../../utils/http/QueryParamsElement';
import SortType from '../../../utils/http/SortType';

enum RocketChatQueryKeysType {
  OFFSET = 'offset',
  SORT = 'sort',
  QUERY = 'query',
  COUNT = 'count'
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
    const sort = {};
    filter.getFilterCriterias().forEach(filterCriteria => {
      filterCriteria = Object.assign(new FilterCriteriaImpl(), filterCriteria);
      switch (filterCriteria.getFilterOperation()) {
        case FilterOperationType.OFFSET:
          queryParams.addQueryParamsElement(
            new QueryParamsElement(RocketChatQueryKeysType.OFFSET, filterCriteria.getValues()[0])
          );
          break;
        case FilterOperationType.SORT:
          const order = filterCriteria.getValues()[0];
          switch (order) {
            case SortType.ASC:
              sort[filterCriteria.getKey()] = 1;
              break;
            case SortType.DESC:
              sort[filterCriteria.getKey()] = -1;
              break;
          }
          break;
        case FilterOperationType.MATCHES_REGEX:
          query[filterCriteria.getKey()] = { $regex: filterCriteria.getValues().toString() };
          break;
        case FilterOperationType.EQUALS_TO:
          query[filterCriteria.getKey()] = { $regex: `/^${filterCriteria.getValues().toString()}/` };
          break;
        case FilterOperationType.LIMIT:
          queryParams.addQueryParamsElement(
            new QueryParamsElement(RocketChatQueryKeysType.COUNT, filterCriteria.getValues()[0])
          );
          break;
        case FilterOperationType.DIFFERENT_THAN:
          query[filterCriteria.getKey()] = { $regex: `^((?!${filterCriteria.getValues().toString()}).)*$` };
          break;
        case FilterOperationType.FEWER_THAN:
        case FilterOperationType.GREATER_THAN:
          throw new Error('Filter not applicable');
        default:
          throw new Error('Filter not valid');
      }
    });
    Object.keys(query).length > 0
      ? queryParams.addQueryParamsElement(new QueryParamsElement(RocketChatQueryKeysType.QUERY, query))
      : '';
    Object.keys(sort).length > 0
      ? queryParams.addQueryParamsElement(new QueryParamsElement(RocketChatQueryKeysType.SORT, sort))
      : '';
    return queryParams.toQueryParamsString();
  }
}
