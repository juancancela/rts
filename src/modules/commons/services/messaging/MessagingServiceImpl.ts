import { remote, Commandable } from '../../../../utils/command';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import Message from '../../models/Message/Message';
import MessagingService from './MessagingService';
import MessageImpl from '../../models/Message/MessageImpl';
import MessageMetadataImpl from '../../models/MessageMetadata/MessageMetadataImpl';
import RocketChatProvider from '../../providers/RocketChatProvider';
import Room from '../../models/Room/Room';
import User from '../user/models/User/User';
import { ModuleType } from '../../../../utils/constant';
import Filter from '../../../../utils/filter/Filter';
import RocketChatProviderTransformer from '../../providers/RocketChatProviderTransformer';
import ApplicationError from '../../../../utils/error/ApplicationError';
import ServiceResponse from '../../../../utils/service/ServiceResponse';
import ServiceResponseImpl from '../../../../utils/service/ServiceResponseImpl';

/**
 * @description Service that provides messaging operations for @User
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class MessagingServiceImpl extends AbstractBaseService implements MessagingService, Commandable {
  @remote
  async pinMessage(messageId: string): Promise<Message | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async unpinMessage(messageId: string): Promise<Message | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async reportMessage({
    messageId,
    userId
  }: {
    messageId: string;
    userId: string;
  }): Promise<Message | ApplicationError> {
    return await new MessageImpl(new MessageMetadataImpl(new Date(), true, '23'), '3', true, 'zaraza report');
  }

  @remote
  async getLastMessage(userId: string): Promise<Message | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async sendMessageToRoom(roomId: string, message: Message): Promise<Message | ApplicationError> {
    message = Object.assign(new MessageImpl(), message);
    return await RocketChatProvider.chatPostMessage(roomId, message.getContent());
  }

  @remote
  async getMessage(messageId: string): Promise<Message | ApplicationError> {
    return await new MessageImpl(
      new MessageMetadataImpl(new Date(), true, '23'),
      messageId,
      true,
      'local text content'
    );
  }

  @remote
  async getMessages(roomName: string, filter?: Filter): Promise<ServiceResponse<Message[]>> {
    try {
      const channelsMessages = await RocketChatProvider.channelsMessages(filter, roomName);
      const response = RocketChatProviderTransformer.toMessagesFrom(channelsMessages);
      return new ServiceResponseImpl(response);
    } catch (error) {
      return new ServiceResponseImpl(null, error);
    }
  }

  @remote
  async getRooms(filter?: Filter): Promise<Room[] | ApplicationError> {
    try {
      return RocketChatProviderTransformer.toRoomsFrom(await RocketChatProvider.channelsList(filter));
    } catch (error) {
      return error;
    }
  }

  @remote
  async updateMessage(updatedMessage: Message): Promise<Message | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async deleteMessage(messageId: string): Promise<Message | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async getModerators(roomId: string): Promise<User[] | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async updateRoomName(updatedName: string, roomId: string): Promise<Room | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async createRoom(newRoom: Room): Promise<Room | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async deleteRoom(roomId: string): Promise<Room | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async addUserToRoom(userId: string, roomId: string): Promise<User | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async removeUserFromRoom(userId: string, roomId: string): Promise<User | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  getServiceName(): string {
    return 'messagingService';
  }
}
