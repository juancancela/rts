import Identity from './Identity';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class IdentityImpl implements Identity {
  private phoneNumber: string;
  private id: string;
  private password: string;

  constructor(phoneNumber: string, id: string, password: string) {
    this.phoneNumber = phoneNumber;
    this.id = id;
    this.password = password;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getPassword(): string {
    return this.password;
  }

  getId(): string {
    return this.id;
  }
}
