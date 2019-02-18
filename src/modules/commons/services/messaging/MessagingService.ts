import Service from '../../../../utils/service/Service';
import Message from '../../models/Message/Message';
import User from '../user/models/User/User';
import Room from '../../models/Room/Room';
import Filter from '../../../../utils/filter/Filter';
import ApplicationError from '../../../../utils/error/ApplicationError';
import ServiceResponse from '../../../../utils/service/ServiceResponse';

/**
 * @description Service that provides messaging operations for @User
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface MessagingService extends Service {
  pinMessage(messageId: string): Promise<Message | ApplicationError>;
  unpinMessage(messageId: string): Promise<Message | ApplicationError>;
  reportMessage({ messageId, userId }: { messageId: string; userId: string }): Promise<Message | ApplicationError>;
  getLastMessage(userId: string): Promise<Message | ApplicationError>;
  sendMessageToRoom(roomId: string, message: Message): Promise<Message | ApplicationError>;
  getMessage(messageId: string): Promise<Message | ApplicationError>;
  getMessages(roomName: string, filter?: Filter): Promise<ServiceResponse<Message[]>>;
  updateMessage(updatedMessage: Message): Promise<Message | ApplicationError>;
  deleteMessage(messageId: string): Promise<Message | ApplicationError>;
  getModerators(roomId: string): Promise<User[] | ApplicationError>;
  updateRoomName(updatedName: string, roomId: string): Promise<Room | ApplicationError>;
  createRoom(newRoom: Room): Promise<Room | ApplicationError>;
  deleteRoom(roomId: string): Promise<Room | ApplicationError>;
  addUserToRoom(userId: string, roomId: string): Promise<User | ApplicationError>;
  removeUserFromRoom(userId: string, roomID: string): Promise<User | ApplicationError>;
  getRooms(filter?: Filter): Promise<Room[] | ApplicationError | ApplicationError>;
}
