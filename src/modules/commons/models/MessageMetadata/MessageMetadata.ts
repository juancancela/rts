import Resource from '../../../../utils/resource/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessageMetadata extends Resource {
  getCreationDate(): Date;
  isMessageEdited(): Boolean;
}
