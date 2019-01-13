import BaseResource from '../resources/BaseResource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface BaseFilter<T extends BaseResource> {
  executeFilter(): T[];
}