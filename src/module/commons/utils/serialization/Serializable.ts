import BaseResource from '../resources/BaseResource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Serializable<T extends BaseResource> {
  fromJSON(serializedObject: Object): T;
}