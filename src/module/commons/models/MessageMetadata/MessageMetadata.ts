import BaseResource from "../../utils/resources/BaseResource";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessageMetadata extends BaseResource {
  getCreationDate(): Date;
  isMessageEdited(): Boolean;
}
