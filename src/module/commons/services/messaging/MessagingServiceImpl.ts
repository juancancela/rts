import MessagingService from './MessagingService';
import Message from '../../models/Message/Message';
import MessageImpl from '../../models/Message/MessageImpl';
import User from '../user/models/User/User';
import MessageFilter from '../../models/Message/MessageFilter';
import MessageMetadataImpl from '../../models/MessageMetadata/MessageMetadataImpl';
import Modules from '../../../../utils/modules/Modules';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../utils/services/AbstractBaseService';
import Room from '../../models/Room/Room';
import RoomFilter from '../../models/Room/RoomFilter';
import remote from '../../../../utils/decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServiceImpl extends AbstractBaseService implements MessagingService, Commandable {
  @remote
  async pinMessage(message: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async unpinMessage(message: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async reportMessage(reportedMessage: Message, reportedUser: User): Promise<Message> {
    return new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), '3', true, 'zaraza report');
  }

  @remote
  async getLastMessage(user: User): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async sendMessageToRoom(message: Message, room: Room): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async getMessage(messageId: string): Promise<Message> {
    return await new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), messageId, true, 'local text content');
  }

  @remote
  async getMessages(messageFilter: MessageFilter): Promise<Message[]> {
    return await [new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), '3', true, 'local text content')];
  }

  @remote
  async updateMessage(updatedMessage: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async deleteMessage(messageId: string): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  getModerators(room: Room): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  @remote
  updateRoomName(updatedName: string, room: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  @remote
  getRooms(roomFilter: RoomFilter): Promise<Room[]> {
    throw new Error('Method not implemented.');
  }

  @remote
  createRoom(newRoom: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  @remote
  deleteRoom(room: Room): Room {
    throw new Error('Method not implemented.');
  }

  @remote
  addUserToRoom(user: User, room: Room): Promise<User> {
    throw new Error('Method not implemented.');
  }

  @remote
  removeUserFromRoom(user: User, room: Room): Promise<User> {
    throw new Error('Method not implemented.');
  }

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'messagingService';
  }
}
