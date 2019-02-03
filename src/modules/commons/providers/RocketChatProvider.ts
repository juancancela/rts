import { exec } from '../../../utils/http/exec';
import RocketChatOperations from './RocketChatOperations';
import UserServiceImpl from '../services/user/UserServiceImpl';
import UserService from '../services/user/UserService';
import ProviderType from '../../../utils/provider/ProviderType';
import AbstractBaseProvider from '../../../utils/provider/AbstractBaseProvider';
import { HTTPMethodType } from '../../../utils/http/HttpMethodType';
import Filter from '../../../utils/filter/Filter';
import RocketChatFilterBuilder from './RocketChatFilterBuilder';

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
    const passport = await RocketChatProvider.userService.getUserPassport('mockedUserId');
    const xAuthToken = passport.getKey(ProviderType.ROCKET_CHAT, 'X-Auth-Token');
    const xUserId = passport.getKey(ProviderType.ROCKET_CHAT, 'X-User-Id');
    return {
      'X-Auth-Token': xAuthToken,
      'X-User-Id': xUserId
    };
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
   * Gets the list of channels
   */
  static async channelsList(filter?: Filter): Promise<any> {
    return await RocketChatProvider._exec(HTTPMethodType.GET, RocketChatOperations.ChannelsList, filter);
  }

  /**
   * Sends a message to the specified channel
   * @param channel the channel to which the message will be sent to
   * @param text the text message to be sent
   */
  static async chatPostMessage(channel: string, text: string): Promise<any> {
    return await RocketChatProvider._exec(HTTPMethodType.POST, RocketChatOperations.ChatPostMessage, null, {
      channel,
      text
    });
  }
}
