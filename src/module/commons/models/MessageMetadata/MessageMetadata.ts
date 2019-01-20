import Resource from '../../utils/resources/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessageMetadata extends Resource {
  getCreationDate(): Date;
  isMessageEdited(): Boolean;
}
