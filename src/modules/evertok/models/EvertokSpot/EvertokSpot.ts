import Room from '../../../commons/models/Room/Room';
import GeoLocation from '../../../commons/models/GeoLocation/GeoLocation';

/**
 * An @EvertokSpot provides a enriched and extended @Room with specific operations for Evertok Spot Service
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpot extends Room {
  /**
   * @returns the geolocation of an Evertok Spot
   */
  getGeoLocation(): GeoLocation;

  /**
   * @returns the radius in meters of the Evertok Spot
   */
  getRadius(): number;

  /**
   * @returns as image of the Evertok Spot
   */
  getImage(): string;

  /**
   * @returns whether or not its an Evertok Spot
   */
  isPromoted(): boolean;

  /**
   * @returns whether or not its an Evertok Spot
   */
  getIsPromoted(): boolean;

  /**
   * @returns name of the Evertok Spot
   */
  getName(): string;

  /**
   * Updates existing name of an Evertok Spot
   * @param name updated name of the Evertok Spot
   */
  setName(name: string): void;

  /**
   * @returns date of creation of the Evertok Spot
   */
  getCreationDate(): Date;
}
