import BaseResource from "../BaseResource/BaseResource";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Identity extends BaseResource {
  getUser(): string;
  getPassword(): string;
  getPhoneNumber(): string;
}
