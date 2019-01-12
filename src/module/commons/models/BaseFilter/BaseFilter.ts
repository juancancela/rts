import BaseResource from '../BaseResource/BaseResource';

export default interface BaseFilter<T extends BaseResource> {
  executeFilter(): T[];
}