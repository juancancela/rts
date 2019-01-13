import Room from "../../../commons/models/Room/Room";
import GeoLocation from "../../../commons/models/GeoLocation/GeoLocation";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpot extends Room {
  getGeoLocation(): GeoLocation;
  getRadius(): number;
  getImage(): string;
  isPromoted(): boolean;
  getCreationDate(): Date;
}
