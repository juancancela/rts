import Serializable from '../../../commons/utils/serialization/Serializable';
import EvertokSpot from './EvertokSpot';
import GeoLocation from '../../../commons/models/GeoLocation/GeoLocation';

export default class EvertokSpotImpl implements EvertokSpot, Serializable<EvertokSpotImpl> {
  private geoLocation: GeoLocation;
  private radius: Number;
  private image: string;
  private name: string;
  private promoted: boolean;
  private creationDate: Date;
  private id: string;

  constructor(
    geoLocation: GeoLocation,
    radius: Number,
    image: string,
    name: string,
    promoted: boolean,
    creationDate: Date,
    id: string
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
  getRadius(): Number {
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
  fromJSON(serializedObject: Object): EvertokSpotImpl {
    throw new Error('Method not implemented.');
  }
}
