import EvertokSpotMetadata from './EvertokSpotMetadata';
import User from '../../../commons/services/user/models/User/User';

export default class EvertokSpotMetadataImpl implements EvertokSpotMetadata {
  private id: string;
  private membersCount: number;
  private unreadMessages: number;
  private lastDateOfRead: number;
  private messagesCount: number;
  private userMentions: number;

  constructor(
    id: string,
    membersCount: number,
    unreadMessages: number,
    lastDateOfRead: number,
    messagesCount: number,
    userMentions: number
  ) {
    this.id = id;
    this.membersCount = membersCount;
    this.unreadMessages = unreadMessages;
    this.lastDateOfRead = lastDateOfRead;
    this.messagesCount = messagesCount;
    this.userMentions = userMentions;
  }

  getId(): string {
    return this.id;
  }

  getMembersCount(): number {
    return this.messagesCount;
  }

  getUnreadMessages(user: User): number {
    return this.unreadMessages;
  }

  getLastDateOfRead(user: User): number {
    return this.lastDateOfRead;
  }

  getMessagesCount(): number {
    return this.messagesCount;
  }

  getUserMentions(user: User): number {
    return this.userMentions;
  }
}
