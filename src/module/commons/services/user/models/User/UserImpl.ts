import User from './User';
import UserPersonalData from '../UserPersonalData/UserPersonalData';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class UserImpl implements User {
  private id: string;
  private userPersonalData: UserPersonalData;
  private tag: string;
  private avatar: string;

  constructor(id: string, userPersonalData: UserPersonalData, tag: string, avatar: string) {
    this.id = id;
    this.userPersonalData = userPersonalData;
    this.tag = tag;
    this.avatar = avatar;
  }

  getUserPersonalData(): UserPersonalData {
    return this.userPersonalData;
  }

  getTag(): string {
    return this.tag;
  }

  getAvatar(): string {
    return this.avatar;
  }

  getId(): string {
    return this.id;
  }
}
