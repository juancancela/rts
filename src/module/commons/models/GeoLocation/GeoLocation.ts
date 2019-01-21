import Resource from '../../utils/resources/Resource';

/**
 * GeoLocation provides a contract for geo positioning
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocation extends Resource {
  /**
   * @returns the latitude
   */
  getLat(): number;

  /**
   * @returns the longitude
   */
  getLon(): number;
}
