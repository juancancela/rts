import User from '../user/models/User/User';
import Service from '../../utils/services/Service';
import Identity from '../../models/Identity/Identity';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface AuthenticationService extends Service {
  login(identity: Identity): boolean;
  signUp(identity: Identity, user: User): User;
  recoverPassword(identity: Identity): void;
}
