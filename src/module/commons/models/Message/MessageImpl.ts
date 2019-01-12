import Message from './Message';
import Serializable from '../../utils/serialization/Serializable';
import MessageMetadata from '../MessageMetadata/MessageMetadata';
import MessageMetadataImpl from '../MessageMetadata/MessageMetadataImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessageImpl implements Message, Serializable<Message> {
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

  fromJSON(serializedObject: Object): Message {
    return MessageImpl.fromJSON(serializedObject);
  }

  static fromJSON(serializedObject: Object): Message {
    let d = Object.assign(new MessageImpl(), serializedObject);
    d.messageMetadata = MessageMetadataImpl.fromJSON(d['messageMetadata']);
    return d;
  }
}
