import GeoLocation from './GeoLocation';

/**
 * GeoLocation provides a contract for geo positioning
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationImpl implements GeoLocation {
  private lat: number;
  private lon: number;

  /**
   * @param lat Latitude value.
   * @param lon Longitude value.
   */
  constructor(lat?: number, lon?: number) {
    this.lat = lat;
    this.lon = lon;
  }

  /**
   * @returns the latitude
   */
  getLat(): number {
    return this.lat;
  }

  /**
   * @returns the longitude
   */
  getLon(): number {
    return this.lon;
  }

  /**
   * @returns the id of the instance
   */
  getId(): string {
    return 'GeoLocationImpl';
  }
}
