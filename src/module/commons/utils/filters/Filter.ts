import Resource from '../resources/Resource';

/**
 * Interface used to define model filters.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Filter<T extends Resource> {
  executeFilter(): T[];
}
