import User from '../user/models/User/User';
import Service from '../../utils/services/Service';
import Passport from '../../models/Passport/Passport';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface AuthenticationService extends Service {
  login(identity: Passport): boolean;
  signUp(identity: Passport, user: User): User;
  recoverPassword(identity: Passport): void;
}
