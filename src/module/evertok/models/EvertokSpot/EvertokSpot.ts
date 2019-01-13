import Room from "../../../commons/models/Room/Room";
import Serializable from "../../../commons/utils/serialization/Serializable";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpot extends Room {
  getLocation(): Location;
  getRadius(): Number;
  getImage(): string;
  getName(): string;
  isPromoted(): boolean;
  getCreationDate(): Date;
}
