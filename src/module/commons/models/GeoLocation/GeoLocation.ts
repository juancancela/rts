import Resource from '../../utils/resources/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocation extends Resource {
  getLat(): number;
  getLon(): number;
}
