import BaseResource from "../BaseResource/BaseResource";

export default interface Identity extends BaseResource {
  getUser(): string;
  getPassword(): string;
  getPhoneNumber(): string;
}
