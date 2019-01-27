import MessageMetadata from './MessageMetadata';

/**
 * Metadata associated to a @Message
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

  /**
   * @returns date when message was created
   */
  getCreationDate(): Date {
    return this.creationDate;
  }

  /**
   * @returns whether or not the message was previously edited
   */
  isMessageEdited(): Boolean {
    return this.messageEdited;
  }

  /**
   * @returns id of the message metadata object
   */
  getId(): string {
    return this.id;
  }
}
