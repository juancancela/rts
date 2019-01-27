import Message from './Message';
import MessageMetadata from '../MessageMetadata/MessageMetadata';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessageImpl implements Message {
  private messageMetadata: MessageMetadata;
  private id: string;
  private promoted: boolean;
  private content: string;

  constructor(messageMetadata?: MessageMetadata, id?: string, promoted?: boolean, content?: string) {
    this.messageMetadata = messageMetadata;
    this.id = id;
    this.promoted = promoted;
    this.content = content;
  }

  setIsPromoted(isPromoted: boolean) {
    this.promoted = isPromoted;
  }

  getIsPromoted(): boolean {
    return this.promoted;
  }

  isPromoted(): boolean {
    return this.promoted;
  }

  getMessageMetadata(): MessageMetadata {
    return this.messageMetadata;
  }

  getId(): string {
    return this.id;
  }

  getContent(): string {
    return this.content;
  }
}
