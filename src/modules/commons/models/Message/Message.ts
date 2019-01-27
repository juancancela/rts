import Resource from '../../../../utils/resource/Resource';
import MessageMetadata from '../MessageMetadata/MessageMetadata';

/**
 * A Message is a finite and persistible unit of content that is owned by an User, and sent to a given Room.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Message extends Resource {
  /**
   * @param isPromoted sets whether or not its a promoted (aka: ad) message
   */
  setIsPromoted(isPromoted: boolean): void;

  /**
   * @returns whether or not its a promoted message
   */
  getIsPromoted(): boolean;

  /**
   * @returns whether or not its a promoted message
   */
  isPromoted(): boolean;

  /**
   * @returns the content of the message
   */
  getContent(): string;

  /**
   * @returns message metadata
   */
  getMessageMetadata(): MessageMetadata;
}
