import BaseResource from "../BaseResource/BaseResource";

export default interface MessageMetadata extends BaseResource {
  getCreationDate(): Date;
  isMessageEdited(): Boolean;
}
