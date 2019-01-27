import EvertokSpotMetadata from './EvertokSpotMetadata';

/**
 * Metadata of an Evertok Spot
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotMetadataImpl implements EvertokSpotMetadata {
  private id: string;
  private userCount: number;
  private unreadMessages: number;
  private lastDateOfRead: number;
  private messagesCount: number;
  private userMentions: number;

  /**
   * constructor
   * @param id id of Evertok Spot Metadata
   * @param userCount number of user that participated on the Evertok Spot
   * @param unreadMessages list of unread messages of Evertok Spot
   * @param lastDateOfRead date of last time @User accessed to Evertok Spot
   * @param messagesCount number of messages of Evertok Spot
   * @param userMentions number of mentions on @Message of Evertok Spot where @User is mentioned
   */
  constructor(id: string, userCount: number, unreadMessages: number, lastDateOfRead: number, messagesCount: number, userMentions: number) {
    this.id = id;
    this.userCount = userCount;
    this.unreadMessages = unreadMessages;
    this.lastDateOfRead = lastDateOfRead;
    this.messagesCount = messagesCount;
    this.userMentions = userMentions;
  }

  getMembersCount(): number {
    return this.userCount;
  }

  getUnreadMessages(userId: string): number {
    return this.unreadMessages;
  }

  getLastDateOfRead(userId: string): number {
    return this.lastDateOfRead;
  }

  getMessagesCount(): number {
    return this.messagesCount;
  }

  getUserMentions(userId: string): number {
    return this.userMentions;
  }

  getId(): string {
    return this.id;
  }
}
