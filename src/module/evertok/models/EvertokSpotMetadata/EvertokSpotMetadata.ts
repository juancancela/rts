import User from "../../../commons/services/user/models/User/User";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotMetadata {
  getMembersCount(): number;
  getUnreadMessages(user: User): number;
  getLastDateOfRead(user: User): number;
  getMessagesCount(): number;
  getUserMentions(user: User): number;
}
