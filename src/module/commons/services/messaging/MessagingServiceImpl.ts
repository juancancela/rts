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
import remote from '../../../../utils/decorators/remote';
import RocketChatProvider from '../../providers/RocketChatProvider';

/**
 * @internal
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServiceImpl extends AbstractBaseService implements MessagingService, Commandable {
  @remote
  async pinMessage(messageId: string): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async unpinMessage(messageId: string): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async reportMessage({ messageId, userId }: { messageId: string; userId: string }): Promise<Message> {
    console.log('messageId => ', messageId);
    console.log('userId => ', userId);
    return await new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), '3', true, 'zaraza report');
  }

  @remote
  async getLastMessage(userId: string): Promise<Message> {
    throw new Error('Method not implemented.');
  }

  @remote
  async sendMessageToRoom(messageId: string, roomId: string): Promise<Message> {
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
  async getRooms(): Promise<Room[]> {
    const channels = await RocketChatProvider.channels_list();
    return channels;
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
  async getModerators(roomId: string): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  @remote
  async updateRoomName(updatedName: string, roomId: string): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  @remote
  async createRoom(newRoom: Room): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  @remote
  async deleteRoom(roomId: string): Promise<Room> {
    throw new Error('Method not implemented.');
  }

  @remote
  async addUserToRoom(userId: string, roomId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  @remote
  async removeUserFromRoom(userId: string, roomId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'messagingService';
  }
}
