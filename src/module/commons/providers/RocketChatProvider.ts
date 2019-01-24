import AbstractBaseProvider from "../../../utils/providers/AbstractBaseProvider";
import Providers from "../../../utils/providers/Providers";
import Config from "../../../config/Config";
import HttpUtils, { HTTPMethod } from "../../../utils/http/HttpUtils";
import RocketChatOperations from "./RocketChatOperations";
import UserServiceImpl from "../services/user/UserServiceImpl";
import UserService from "../services/user/UserService";

export default class RocketChatProvider extends AbstractBaseProvider {
    constructor() {
        super(Providers.ROCKET_CHAT);
    }

    private static userService: UserService = new UserServiceImpl();

    /**
     * @returns Rocket Chat HTTP Authentication Headers. Authentication Headers are used to operate with Rocket Chat Rest API.
     */
    private static getAuthHeaders() {
        const xAuthToken = RocketChatProvider.userService.getUserPassport('mockedUserId').getKey(Providers.ROCKET_CHAT, 'X-Auth-Token');
        const xUserId = RocketChatProvider.userService.getUserPassport('mockedUserId').getKey(Providers.ROCKET_CHAT, 'X-User-Id');
        return {
            'X-Auth-Token': xAuthToken,
            'X-User-Id': xUserId
        };
    }

    /**
     * Execute an operation on Rocket Chat Rest API
     * @param method HTTP method
     * @param operation operation name. In example, for endpoint api/v1/channels/channels.list, channels.list is the operation name.
     * @param queryParams list of query parameters to the added to the request to Rocket Chat Rest API.
     * @param body Body to the appended to the request to Rocket Chat Rest API.
     */
    private static async execute(method: HTTPMethod, operation: string, queryParams?: string[], body?: object): Promise<any> {
        return HttpUtils.exec(method, `${Config.rocketChatUrl}${operation}`, queryParams, body, RocketChatProvider.getAuthHeaders());
    }

    static async channelsList(): Promise<any> {
        return await RocketChatProvider.execute(HTTPMethod.GET, RocketChatOperations.ChannelsList);
    }

    static chatSendMessage() {
        throw new Error("Method not implemented.");
    }
}