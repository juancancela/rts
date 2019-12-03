import EvertokSpot from './EvertokSpot';
import GeoLocation from '../../../commons/models/GeoLocation/GeoLocation';

/**
 * An @EvertokSpot provides a enriched and extended @Room with specific operations for Evertok Spot Service
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotImpl implements EvertokSpot {
  private geoLocation: GeoLocation;
  private radius: number;
  private image: string;
  private name: string;
  private promoted: boolean;
  private creationDate: Date;
  private id: string;

  /**
   * constructor
   * @param geoLocation geolocation of the Evertok Spot
   * @param radius radius in meters of the Evertok Spot
   * @param image image of the Evertok Spot
   * @param name name of the Evertok Spot
   * @param promoted whether or not the Evertok Spot is promoted
   * @param creationDate creation date of the Evertok Spot
   * @param id id of the Evertok Spot
   */
  constructor(
    geoLocation?: GeoLocation,
    radius?: number,
    image?: string,
    name?: string,
    promoted?: boolean,
    creationDate?: Date,
    id?: string
  ) {
    this.geoLocation = geoLocation;
    this.radius = radius;
    this.image = image;
    this.name = name;
    this.promoted = promoted;
    this.creationDate = creationDate;
    this.id = id;
  }

  /**
   * @returns the geolocation of an Evertok Spot
   */
  getGeoLocation(): GeoLocation {
    return this.geoLocation;
  }

  /**
   * @returns the radius in meters of the Evertok Spot
   */
  getRadius(): number {
    return this.radius;
  }

  /**
   * @returns as image of the Evertok Spot
   */
  getImage(): string {
    return this.image;
  }

  /**
   * @returns name of the Evertok Spot
   */
  getName(): string {
    return this.name;
  }

  /**
   * @returns whether or not its an Evertok Spot
   */
  isPromoted(): boolean {
    return this.promoted;
  }

  /**
   * @returns whether or not its an Evertok Spot
   */
  getIsPromoted(): boolean {
    return this.promoted;
  }

  /**
   * @returns date of creation of the Evertok Spot
   */
  getCreationDate(): Date {
    return this.creationDate;
  }

  /**
   * Updates existing name of an Evertok Spot
   * @param name updated name of the Evertok Spot
   */
  setName(): string {
    return this.name;
  }

  /**
   * @returns id of this instance
   */
  getId(): string {
    return this.id;
  }
}
