import Message from './Message';
import MessageMetadata from '../MessageMetadata/MessageMetadata';

/**
 * A Message is a finite and persistible unit of content that is owned by an User, and sent to a given Room.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessageImpl implements Message {
  private messageMetadata: MessageMetadata;
  private id: string;
  private promoted: boolean;
  private content: string;

  /**
   * constructor
   * @param messageMetadata MessageMetadata instance
   * @param id id of the messsage
   * @param promoted whether or not its a promoted -ad- message
   * @param content the content of the message
   */
  constructor(messageMetadata?: MessageMetadata, id?: string, promoted?: boolean, content?: string) {
    this.messageMetadata = messageMetadata;
    this.id = id;
    this.promoted = promoted;
    this.content = content;
  }

  /**
   * @param isPromoted whether or not its a promoted (aka: ad) message
   */
  setIsPromoted(isPromoted: boolean) {
    this.promoted = isPromoted;
  }

  /**
   * @param isPromoted whether or not its a promoted (aka: ad) message
   */
  getIsPromoted(): boolean {
    return this.promoted;
  }

  /**
   * @param isPromoted whether or not its a promoted (aka: ad) message
   */
  isPromoted(): boolean {
    return this.promoted;
  }

  /**
   * @returns message metadata
   */
  getMessageMetadata(): MessageMetadata {
    return this.messageMetadata;
  }

  /**
   * @returns id of the message
   */
  getId(): string {
    return this.id;
  }

  /**
   * @returns content of the message
   */
  getContent(): string {
    return this.content;
  }
}
