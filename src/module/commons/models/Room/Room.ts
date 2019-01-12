import BaseResource from "../BaseResource/BaseResource";

export default interface Room extends BaseResource {
    getName(): string;
    setName(): string;
}