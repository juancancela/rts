import Resource from '../../utils/resources/Resource';

/**
 * Identity interface defines a contract to specify identity data.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface Identity extends Resource {
  getPassword(): string;
  getPhoneNumber(): string;
}
