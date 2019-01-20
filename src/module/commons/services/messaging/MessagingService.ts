import Service from '../../utils/services/Service';
import Message from '../../models/Message/Message';
import User from '../user/models/User/User';
import MessageFilter from '../../models/Message/MessageFilter';
import RoomFilter from '../../models/Room/RoomFilter';
import Room from '../../models/Room/Room';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingService extends Service {
  pinMessage(message: Message): Promise<Message>;
  unpinMessage(message: Message): Promise<Message>;
  reportMessage(reportedMessage: Message, reportedUser: User): Promise<Message>;
  getLastMessage(user: User): Promise<Message>;
  sendMessageToRoom(message: Message, room: Room): Promise<Message>;
  getMessage(messageId: string): Promise<Message>;
  getMessages(messageFilter: MessageFilter): Promise<Message[]>;
  updateMessage(updatedMessage: Message): Promise<Message>;
  deleteMessage(messageId: string): Promise<Message>;
  getModerators(room: Room): Promise<User[]>;
  updateRoomName(updatedName: string, room: Room): Promise<Room>;
  getRooms(roomFilter: RoomFilter): Promise<Room[]>;
  createRoom(newRoom: Room): Promise<Room>;
  deleteRoom(room: Room): Room;
  addUserToRoom(user: User, room: Room): Promise<User>;
  removeUserFromRoom(user: User, room: Room): Promise<User>;
}
