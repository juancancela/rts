import UserPersonalData from '../UserPersonalData/UserPersonalData';
import Resource from '../../../../utils/resources/Resource';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface User extends Resource {
  getUserPersonalData(): UserPersonalData;
  getTag(): string;
  getAvatar(): string;
}
