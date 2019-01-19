import GeoLocation from './GeoLocation';

/**
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

  getLat(): number {
    return this.lat;
  }

  getLon(): number {
    return this.lon;
  }

  getId(): string {
    return 'GeoLocationImpl';
  }
}