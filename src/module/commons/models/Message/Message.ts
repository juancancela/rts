import Resource from '../../utils/resources/Resource';
import MessageMetadata from '../MessageMetadata/MessageMetadata';

/**
 * A Message is a finite and persistible unit of content that is owned by an User, and sent to a given Room.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Message extends Resource {
  setIsPromoted(isPromoted: boolean): void;
  getIsPromoted(): boolean;
  isPromoted(): boolean;
  getContent(): string;
  getMessageMetadata(): MessageMetadata;
}
