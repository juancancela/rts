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

  /**
   * @returns number of user that participated on the Evertok Spot
   */
  getUserCount(): number {
    return this.userCount;
  }

  /**
   * @returns list of unread messages of Evertok Spot
   */
  getUnreadMessages(userId: string): number {
    return this.unreadMessages;
  }

  /**
   * date of last time @User accessed to Evertok Spot
   * @param userId id of user
   */
  getLastDateOfRead(userId: string): number {
    return this.lastDateOfRead;
  }

  /**
   * @returns number of messages of Evertok Spot
   */
  getMessagesCount(): number {
    return this.messagesCount;
  }

  /**
   * number of mentions on @Message of Evertok Spot where @User is mentioned
   * @param userId id of the user
   */
  getUserMentions(userId: string): number {
    return this.userMentions;
  }

  /**
   * @returns id of this instance
   */
  getId(): string {
    return this.id;
  }
}
