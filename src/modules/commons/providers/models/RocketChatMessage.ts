/**
 * @description RocketChatMessage model
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class RocketChatMessage {
    _id: string;
    msg: string;
    ts: string;
    attachments: any;
    starred: any;
}
