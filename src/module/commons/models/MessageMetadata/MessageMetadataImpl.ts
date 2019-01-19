import MessageMetadata from './MessageMetadata';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessageMetadataImpl implements MessageMetadata {
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
}
