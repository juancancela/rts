import Serializable from '../../../commons/utils/serialization/Serializable';
import EvertokSpot from './EvertokSpot';

export default class EvertokSpotImpl implements EvertokSpot, Serializable<EvertokSpotImpl> {
  getLocation(): Location {
    throw new Error('Method not implemented.');
  }
  getRadius(): Number {
    throw new Error('Method not implemented.');
  }
  getImage(): string {
    throw new Error('Method not implemented.');
  }
  getName(): string {
    throw new Error('Method not implemented.');
  }
  isPromoted(): boolean {
    throw new Error('Method not implemented.');
  }
  getCreationDate(): Date {
    throw new Error('Method not implemented.');
  }
  setName(): string {
    throw new Error('Method not implemented.');
  }
  getId(): string {
    throw new Error('Method not implemented.');
  }
  fromJSON(serializedObject: Object): EvertokSpotImpl {
    throw new Error('Method not implemented.');
  }
}
