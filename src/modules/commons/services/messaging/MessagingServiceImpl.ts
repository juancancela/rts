import { remote, Commandable } from '../../../../utils/command';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import Message from '../../models/Message/Message';
import MessagingService from './MessagingService';
import MessageImpl from '../../models/Message/MessageImpl';
import MessageMetadataImpl from '../../models/MessageMetadata/MessageMetadataImpl';
import RocketChatProvider from '../../providers/RocketChatProvider';
import Room from '../../models/Room/Room';
import RoomImpl from '../../models/Room/RoomImpl';
import MessageFilter from '../../models/Message/MessageFilter';
import User from '../user/models/User/User';
import { ModuleType } from '../../../../utils/constant';

/**
 * @description Service that provides messaging operations for @User
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
  async sendMessageToRoom(roomId: string, message: Message): Promise<Message> {
    return await RocketChatProvider.chatPostMessage(roomId, message.getContent());
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
    const rocketChatChannelsList = await RocketChatProvider.channelsList();
    const rooms = [];
    rocketChatChannelsList.channels.forEach(channel => rooms.push(new RoomImpl(channel.name, channel._id)));

    return rooms;
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

  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  getServiceName(): string {
    return 'messagingService';
  }
}
