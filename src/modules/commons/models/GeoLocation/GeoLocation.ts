import Resource from '../../../../utils/resource/Resource';

/**
 * GeoLocation provides a contract for geo positioning
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocation extends Resource {
  /**
   * @returns the latitude of the location
   */
  getLat(): number;

  /**
   * @returns the longitude of the location
   */
  getLon(): number;
}
