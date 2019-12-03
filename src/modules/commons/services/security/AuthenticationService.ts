import User from '../user/models/User/User';
import Service from '../../../../utils/service/Service';
import Passport from '../../models/Passport/Passport';
import ApplicationError from '../../../../utils/error/ApplicationError';

/**
 * Service that provides authentication operations for @User
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface AuthenticationService extends Service {
  login(identity: Passport): Promise<boolean | ApplicationError>;
  signUp(identity: Passport, user: User): Promise<User | ApplicationError>;
  recoverPassword(identity: Passport): Promise<void | ApplicationError>;
}
