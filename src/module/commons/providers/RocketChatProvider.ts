import AbstractBaseProvider from "../../../utils/providers/AbstractBaseProvider";
import Providers from "../../../utils/providers/Providers";
import { RoomImpl, Room } from "../models";
import Config from "../../../config/Config";
import fetch from 'node-fetch';
import { HTTPMethod } from "../../../utils/http/HttpUtils";

export default class RocketChatProvider extends AbstractBaseProvider {
    constructor() {
        super(Providers.ROCKET_CHAT);
    }

    private static async exec(method: HTTPMethod, operation: string, queryParams?: string[], body?: object): Promise<any> {
        return (await fetch(`${Config.rocketChatUrl}${operation}`, {
            method: 'method',
            headers: {
                'X-Auth-Token': '9YSiSLGtxV7XOPsFDxZmcN7eurrho2SWjmedhGWJ4nz',
                'X-User-Id': 'WzuLnwgsMmPq3CrwJ',
            }
        })).json();
    }

    static async channels_list(): Promise<Room[]> {
        const response = await RocketChatProvider.exec(HTTPMethod.GET, 'channels.list');
        //Do the transformation here
        return [new RoomImpl('test', '1')];
    }

    static chat_sendMessage() {
        throw new Error("Method not implemented.");
    }
}