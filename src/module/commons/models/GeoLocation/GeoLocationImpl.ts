import GeoLocation from './GeoLocation';
import Serializable from '../../utils/serialization/Serializable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationImpl implements GeoLocation, Serializable<GeoLocationImpl> {
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

  fromJSON(serializedObject: Object): GeoLocationImpl {
    return GeoLocationImpl.fromJSON(serializedObject);
  }

  static fromJSON(serializedObject: Object): GeoLocationImpl {
    return Object.assign(new GeoLocationImpl(), serializedObject);
  }
}