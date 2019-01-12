import MessageMetadata from './MessageMetadata';
import Serializable from '../../utils/serialization/Serializable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessageMetadataImpl implements MessageMetadata, Serializable<MessageMetadataImpl> {
  private creationDate: Date;
  private messageEdited: boolean;
  private id: string;

  constructor(creationDate?: Date, messageEdited?: boolean, id?: string) {
    this.creationDate = creationDate;
    this.messageEdited = messageEdited;
    this.id = id;
  }

  getCreationDate(): Date {
    return this.creationDate;
  }

  isMessageEdited(): Boolean {
    return this.messageEdited;
  }
  
  getId(): string {
    return this.id;
  }

  fromJSON(serializedObject: Object): MessageMetadataImpl {
    return MessageMetadataImpl.fromJSON(serializedObject);
  }

  static fromJSON(serializedObject: Object): MessageMetadataImpl {
    let d = Object.assign(new MessageMetadataImpl(), serializedObject);
    return d;
  }
}
