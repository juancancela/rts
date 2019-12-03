import Resource from '../../../../utils/resource/Resource';

/**
 * Metadata associated to a @Message
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessageMetadata extends Resource {
  /**
   * @returns date when message was created
   */
  getCreationDate(): Date;

  /**
   * @returns whether or not the message was previously edited
   */
  isMessageEdited(): Boolean;
}
