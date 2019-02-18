import RocketChatChannel from './models/RocketChatChannel';
import Room from '../models/Room/Room';
import * as _ from 'lodash';
import ApplicationError from '../../../utils/error/ApplicationError';
import ApplicationErrorCodeType from '../../../utils/error/ApplicationErrorCodeType';
import RoomImpl from '../models/Room/RoomImpl';
import RocketChatMessage from './models/RocketChatMessage';
import Message from '../models/Message/Message';
import MessageImpl from '../models/Message/MessageImpl';
import MessageMetadataImpl from '../models/MessageMetadata/MessageMetadataImpl';

/**
 * @description Transformation functions from Rocket Chat to RTS models
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RocketChatProviderTransformer {
  /**
   * @param channels list of Rocket Chat Channels models
   * @returns a list of Rooms
   */
  static toRoomsFrom(channels: RocketChatChannel[]): Room[] {
    if (_.isEmpty(channels)) {
      throw new ApplicationError(
        ApplicationErrorCodeType.PROVIDER_TRANSFORMATION_ERROR,
        'RocketChatProviderTransformer.toRoomsFrom(channels) should not receive as input an empty list of channels'
      );
    }

    const rooms = [];
    channels.forEach(channel => rooms.push(RocketChatProviderTransformer.toRoomFrom(channel)));
    return rooms;
  }

  /**
   * @param channel a Rocket Chat Channel model
   * @returns a Room
   */
  static toRoomFrom(channel: RocketChatChannel): Room {
    if (_.isEmpty(channel)) {
      throw new ApplicationError(
        ApplicationErrorCodeType.PROVIDER_TRANSFORMATION_ERROR,
        'RocketChatProviderTransformer.toRoomFrom(channel) should not receive as input an empty channel'
      );
    }
    return new RoomImpl(channel.name, channel._id);
  }

  /**
   * @param rocketChatMessages a list of rocket chat messages
   * @returns Message[]
   */
  static toMessagesFrom(rocketChatMessages: RocketChatMessage[]): Message[] {
    if (_.isEmpty(rocketChatMessages)) {
      throw new ApplicationError(
        ApplicationErrorCodeType.PROVIDER_TRANSFORMATION_ERROR,
        'RocketChatProviderTransformer.toMessagesFrom(rocketChatMessages) should not receive as input an empty list of rocketChatMessages'
      );
    }

    const messages = [];
    rocketChatMessages.forEach(message => messages.push(RocketChatProviderTransformer.toMessageFrom(message)));
    console.log("lala: ", JSON.stringify(rocketChatMessages));
    return messages;
  }

  /**
   * @param rocketChatMessage a rocket chat message
   * @returns Message
   */
  static toMessageFrom(rocketChatMessage: RocketChatMessage): Message {
    if (_.isEmpty(rocketChatMessage)) {
      throw new ApplicationError(
        ApplicationErrorCodeType.PROVIDER_TRANSFORMATION_ERROR,
        'RocketChatProviderTransformer.toMessageFrom(rocketChatMessage) should not receive as input an empty rocketChatMessage'
      );
    }
    return new MessageImpl(new MessageMetadataImpl(new Date(rocketChatMessage.ts), false), rocketChatMessage._id, false, rocketChatMessage.msg, rocketChatMessage.u.username);
  }
}
