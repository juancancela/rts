import Resource from '../../../../utils/resource/Resource';
import { ProviderType } from '../../../../utils/constant';

/**
 * Passport interface defines a contract to specify User identity data.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Passport extends Resource {
  getPassword(): string;
  getPhoneNumber(): string;
  getKey(provider: ProviderType, id: string): string;
  setKey(provider: ProviderType, id: string, value: string): void;
  getUserId(): string;
}
