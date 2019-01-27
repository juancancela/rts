import User from '../../../commons/services/user/models/User/User';
import Resource from '../../../../utils/resource/Resource';

/**
 * Metadata of an Evertok Spot
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotMetadata extends Resource {
  getMembersCount(): number;
  getUnreadMessages(userId: string): number;
  getLastDateOfRead(userId: string): number;
  getMessagesCount(): number;
  getUserMentions(userId: string): number;
}
