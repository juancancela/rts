import AbstractFactory from "./AbstractFactory";
import Message from "../../models/Message/Message";

export default class MessageFactory implements AbstractFactory<Message>{
    create(): Message {
        throw new Error("Method not implemented.");
    }
}