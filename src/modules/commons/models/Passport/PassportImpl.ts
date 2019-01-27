import Passport from './Passport';
import ProviderType from '../../../../utils/constant/ProviderType';

/**
 * Passport is used to specify User identity data.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class PassportImpl implements Passport {
  private phoneNumber: string;
  private id: string;
  private password: string;
  private userId: string;
  private keys = {};

  /**
   * constructor
   * @param userId id of the user
   * @param phoneNumber user phone number
   * @param password user password
   * @param keys user passport keys
   * @param id passport id
   */
  constructor(userId: string, phoneNumber: string, password: string, keys: object, id?: string) {
    this.userId = userId;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.keys = keys;
    this.id = id;
  }

  getKey(provider: ProviderType, id: string): string {
    const identifier = `${provider}:${id}`;
    return this.keys[identifier];
  }

  setKey(provider: ProviderType, id: string, value: string): void {
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
