import BaseResource from "../BaseResource/BaseResource";
import MessageMetadata from "../MessageMetadata/MessageMetadata";

export default interface Message extends BaseResource {
  setIsPromoted(isPromoted: boolean): void;
  getIsPromoted(): boolean;
  isPromoted(): boolean;
  getContent(): string;
  getMessageMetadata(): MessageMetadata;
}
