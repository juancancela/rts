import { exec } from '../../../utils/http/exec';
import RocketChatOperationType from './RocketChatOperationType';
import UserServiceImpl from '../services/user/UserServiceImpl';
import UserService from '../services/user/UserService';
import ProviderType from '../../../utils/provider/ProviderType';
import AbstractBaseProvider from '../../../utils/provider/AbstractBaseProvider';
import { HTTPMethodType } from '../../../utils/http/HttpMethodType';
import Filter from '../../../utils/filter/Filter';
import RocketChatFilterBuilder from './RocketChatFilterBuilder';
import RocketChatChannel from './models/RocketChatChannel';
import PassportImpl from '../models/Passport/PassportImpl';

/**
 * @description RocketChat Provider class enabled access to Rocket Chat API. Official docs: https://rocket.chat/docs/developer-guides/rest-api/
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RocketChatProvider extends AbstractBaseProvider {
  constructor() {
    super(ProviderType.ROCKET_CHAT);
  }

  private static userService: UserService = new UserServiceImpl();

  /**
   * Authentication Headers are used to operate with Rocket Chat Rest API.
   * @returns Rocket Chat HTTP Authentication Headers.
   */
  private static async getAuthHeaders() {
    try {
      const passport = await RocketChatProvider.userService.getUserPassport('mockedUserId');
      const p = Object.assign(new PassportImpl(), passport);
      const xAuthToken = p.getKey(ProviderType.ROCKET_CHAT, 'X-Auth-Token');
      const xUserId = p.getKey(ProviderType.ROCKET_CHAT, 'X-User-Id');
      return {
        'X-Auth-Token': xAuthToken,
        'X-User-Id': xUserId
      };
    } catch (error) {
      return error;
    }
  }

  /**
   * Execute an operation on Rocket Chat Rest API
   * @param method HTTP method
   * @param operation operation name. In example, for endpoint api/v1/channels/channels.list, channels.list is the operation name.
   * @param filter Filter object
   * @param body Body to the appended to the request to Rocket Chat Rest API.
   */
  private static async _exec(method: HTTPMethodType, operation: string, filter?: Filter, body?: object): Promise<any> {
    try {
      let headers = await RocketChatProvider.getAuthHeaders();
      headers['Content-Type'] = 'application/json';

      return await exec(
        method,
        `${process.env.RTS_ROCKET_CHAT_URL}${operation}`,
        filter ? RocketChatFilterBuilder.build(filter) : '',
        body,
        headers
      );
    } catch (e) {
      console.log('error ', e);
    }
  }

  /**
   * @returns list of rocket chat channels
   */
  static async channelsList(filter?: Filter): Promise<RocketChatChannel[]> {
    return (await RocketChatProvider._exec(HTTPMethodType.GET, RocketChatOperationType.ChannelsList, filter)).channels;
  }

  /**
   * Sends a message to the specified channel
   * @param channel the channel to which the message will be sent to
   * @param text the text message to be sent
   */
  static async chatPostMessage(channel: string, text: string): Promise<any> {
    return await RocketChatProvider._exec(HTTPMethodType.POST, RocketChatOperationType.ChatPostMessage, null, {
      channel,
      text
    });
  }
}
