import GeoLocation from './GeoLocation';

/**
 * GeoLocation implementation.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationImpl implements GeoLocation {
  private lat: Number;
  private lon: Number;

  /**
   * @param lat Latitude value. 
   * @param lon Longitude value.
   */
  constructor(lat: Number, lon: Number) {
    this.lat = lat;
    this.lon = lon;
  }

  getLat(): Number {
    return this.lat;
  }

  getLon(): Number {
    return this.lon;
  }

  getId(): string {
    return 'GeoLocationImpl';
  }
}
