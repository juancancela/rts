import User from '../../../commons/services/user/models/User/User';
import Resource from '../../../commons/utils/resources/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotMetadata extends Resource {
  getMembersCount(): number;
  getUnreadMessages(user: User): number;
  getLastDateOfRead(user: User): number;
  getMessagesCount(): number;
  getUserMentions(user: User): number;
}
