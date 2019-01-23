import AbstractBaseProvider from "../../../utils/providers/AbstractBaseProvider";
import Providers from "../../../utils/providers/Providers";
import { RoomImpl, Room } from "../models";
import Config from "../../../config/Config";
import fetch from 'node-fetch';
import HttpUtils, { HTTPMethod } from "../../../utils/http/HttpUtils";
import RocketChatOperations from "./RocketChatOperations";

export default class RocketChatProvider extends AbstractBaseProvider {
    constructor() {
        super(Providers.ROCKET_CHAT);
    }

    private static async exec(method: HTTPMethod, operation: string, queryParams?: string[], body?: object): Promise<any> {
        const headers = {
            'X-Auth-Token': '9YSiSLGtxV7XOPsFDxZmcN7eurrho2SWjmedhGWJ4nz',
            'X-User-Id': 'WzuLnwgsMmPq3CrwJ',
        };
        return HttpUtils.exec(method, `${Config.rocketChatUrl}${operation}`, queryParams, body, headers);
    }

    static async channels_list(): Promise<any> {
        return await RocketChatProvider.exec(HTTPMethod.GET, RocketChatOperations.ChannelsList);
    }

    static chat_sendMessage() {
        throw new Error("Method not implemented.");
    }
}