import EvertokSpot from './EvertokSpot';
import GeoLocation from '../../../commons/models/GeoLocation/GeoLocation';

/**
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

  getGeoLocation(): GeoLocation {
    return this.geoLocation;
  }
  
  getRadius(): number {
    return this.radius;
  }

  getImage(): string {
    return this.image;
  }

  getName(): string {
    return this.name;
  }
  
  isPromoted(): boolean {
    return this.promoted;
  }

  getCreationDate(): Date {
    return this.creationDate;
  }

  setName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }
}
