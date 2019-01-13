import User from "../../../commons/services/user/models/User/User";
import BaseResource from "../../../commons/utils/resources/BaseResource";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotMetadata extends BaseResource{
  getMembersCount(): number;
  getUnreadMessages(user: User): number;
  getLastDateOfRead(user: User): number;
  getMessagesCount(): number;
  getUserMentions(user: User): number;
}
