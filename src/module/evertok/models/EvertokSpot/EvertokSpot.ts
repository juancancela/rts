import Room from "../../../commons/models/Room/Room";

export default interface EvertokSpot extends Room {
  getLocation(): Location;
  getRadius(): Number;
  getImage(): string;
  getName(): string;
  isPromoted(): boolean;
  getCreationDate(): Date;
}
