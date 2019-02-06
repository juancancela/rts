import RocketChatChannel from './models/RocketChatChannel';
import Room from '../models/Room/Room';
import * as _ from 'lodash';
import ApplicationError from '../../../utils/error/ApplicationError';
import ApplicationErrorCodeType from '../../../utils/error/ApplicationErrorCodeType';
import RoomImpl from '../models/Room/RoomImpl';

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
        'RocketChatProviderTransformer.toRoomsFrom(channels) should not receive as input an empty list of channels',
        null
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
        'RocketChatProviderTransformer.toRoomFrom(channel) should not receive as input an empty channel',
        null
      );
    }
    return new RoomImpl(channel.name, channel._id);
  }
}
