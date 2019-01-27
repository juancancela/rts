import Passport from './Passport';
import Providers from '../../../../utils/providers/Providers';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class PassportImpl implements Passport {
  private phoneNumber: string;
  private id: string;
  private password: string;
  private userId: string;
  private keys = {};

  constructor(userId: string, phoneNumber: string, password: string, keys: object, id?: string) {
    this.userId = userId;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.keys = keys;
    this.id = id;
  }

  getKey(provider: Providers, id: string): string {
    const identifier = `${provider}:${id}`;
    return this.keys[identifier];
  }

  setKey(provider: Providers, id: string, value: string): void {
    const identifier = `${provider}:${id}`;
    this.keys[identifier] = value;
  }

  getUserId(): string {
    return this.userId;
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
