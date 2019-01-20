import MessagingService from './MessagingService';
import Message from '../../models/Message/Message';
import MessageImpl from '../../models/Message/MessageImpl';
import User from '../user/models/User/User';
import MessageFilter from '../../models/Message/MessageFilter';
import MessageMetadataImpl from '../../models/MessageMetadata/MessageMetadataImpl';
import Modules from '../../../../utils/modules/Modules';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import AbstractBaseService from '../../utils/services/AbstractBaseService';
import Room from '../../models/Room/Room';
import RoomFilter from '../../models/Room/RoomFilter';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServiceImpl extends AbstractBaseService implements MessagingService, Commandable {
  private isRemoteExecution: boolean = false;

  constructor(isRemote: boolean = false) {
    super();
    this.isRemoteExecution = isRemote;
  }

  getCommand(): Command {
    if (this.isRemote()) return new CommandImpl(true);
    return new CommandImpl(false);
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  async pinMessage(message: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async unpinMessage(message: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async reportMessage(reportedMessage: Message, reportedUser: User): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async getLastMessage(user: User): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async sendMessageToRoom(message: Message, room: Room): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async getMessage(messageId: string): Promise<Message> {
    if (this.isRemote()) return await this.execute('getMessage', null, this.getCommand(), this.getServiceName(), this.getModuleName());
    return await new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), messageId, true, 'local text content');
  }

  async getMessages(messageFilter: MessageFilter): Promise<Message[]> {
    if (this.isRemote()) return await this.execute('getMessages', null, this.getCommand(), this.getServiceName(), this.getModuleName());
    return await [new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), '3', true, 'local text content')];
  }

  async updateMessage(updatedMessage: Message): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  async deleteMessage(messageId: string): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  getModerators(room: Room): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  updateRoomName(updatedName: string, room: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }
  getRooms(roomFilter: RoomFilter): Promise<Room[]> {
    throw new Error('Method not implemented.');
  }
  createRoom(newRoom: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }
  deleteRoom(room: Room): Room {
    throw new Error('Method not implemented.');
  }
  addUserToRoom(user: User, room: Room): Promise<User> {
    throw new Error('Method not implemented.');
  }
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
