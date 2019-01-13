import BaseResource from "../../utils/resources/BaseResource";
import MessageMetadata from "../MessageMetadata/MessageMetadata";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Message extends BaseResource {
  setIsPromoted(isPromoted: boolean): void;
  getIsPromoted(): boolean;
  isPromoted(): boolean;
  getContent(): string;
  getMessageMetadata(): MessageMetadata;
}
