import Service from '../../utils/services/Service';
import Message from '../../models/Message/Message';
import User from '../user/models/User/User';
import MessageFilter from '../../models/Message/MessageFilter';
import RoomFilter from '../../models/Room/RoomFilter';
import Room from '../../models/Room/Room';
import UserImpl from '../user/models/User/UserImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingService extends Service {
  pinMessage(messageId: string): Promise<Message>;
  unpinMessage(messageId: string): Promise<Message>;
  reportMessage({ messageId, userId }: { messageId: string; userId: string }): Promise<Message>;
  getLastMessage(userId: string): Promise<Message>;
  sendMessageToRoom(roomId: string, message: Message): Promise<Message>;
  getMessage(messageId: string): Promise<Message>;
  getMessages(messageFilter: MessageFilter): Promise<Message[]>;
  updateMessage(updatedMessage: Message): Promise<Message>;
  deleteMessage(messageId: string): Promise<Message>;
  getModerators(roomId: string): Promise<User[]>;
  updateRoomName(updatedName: string, roomId: string): Promise<Room>;
  createRoom(newRoom: Room): Promise<Room>;
  deleteRoom(roomId: string): Promise<Room>;
  addUserToRoom(userId: string, roomId: string): Promise<User>;
  removeUserFromRoom(userId: string, roomID: string): Promise<User>;
  getRooms(): Promise<Room[]>;
}
