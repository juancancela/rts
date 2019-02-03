/**
 * @description List of operations that are capable to apply a transformation on a
 * response. That includes filters of data based on provided values, as well as sorting
 * and pagination.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
enum FilterOperationType {
  EQUALS_TO,
  GREATER_THAN,
  FEWER_THAN,
  DIFFERENT_THAN,
  WITHIN,
  LIMIT,
  OFFSET,
  SORT,
  MATCHES_REGEX
}

export default FilterOperationType;
