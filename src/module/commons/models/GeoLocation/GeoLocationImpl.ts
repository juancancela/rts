import GeoLocation from './GeoLocation';
import Serializable from '../../utils/serialization/Serializable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationImpl implements GeoLocation, Serializable<GeoLocationImpl> {
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

  fromJSON(serializedObject: Object): GeoLocationImpl {
    throw new Error('Method not implemented.');
  }
}
