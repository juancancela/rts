import Room from "../../../commons/models/Room/Room";
import GeoLocation from "../../../commons/models/GeoLocation/GeoLocation";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpot extends Room {
  getGeoLocation(): GeoLocation;
  getRadius(): Number;
  getImage(): string;
  getName(): string;
  isPromoted(): boolean;
  getCreationDate(): Date;
}
