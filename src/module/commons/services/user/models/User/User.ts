import UserPersonalData from '../UserPersonalData/UserPersonalData';
import BaseResource from '../../../../utils/resources/BaseResource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface User extends BaseResource {
  getUserPersonalData(): UserPersonalData;
  getTag(): string;
  setAvatar(file: any): void;
  getAvatar(): string;
}
