import Identity from './Identity';
import Serializable from '../../utils/serialization/Serializable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class IdentityImpl implements Identity, Serializable<IdentityImpl> {
  private user: string;
  private phoneNumber: string;
  private id: string;
  private password: string;

  constructor(user: string, phoneNumber: string, id: string, password: string) {
    this.user = user;
    this.phoneNumber = phoneNumber;
    this.id = id;
    this.password = password;
  }

  fromJSON(serializedObject: Object): IdentityImpl {
    throw new Error('Method not implemented.');
  }

  getUser(): string {
    return this.user;
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
