import Resource from '../../utils/resources/Resource';
import Providers from '../../../../utils/providers/Providers';

/**
 * Passport interface defines a contract to specify User identity data.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Passport extends Resource {
  getPassword(): string;
  getPhoneNumber(): string;
  getKey(provider: Providers, id: string): string;
  setKey(provider: Providers, id: string, value: string): void;
  getUserId(): string;
}
