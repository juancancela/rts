import User from '../user/models/User/User';
import BaseService from '../../models/BaseService/BaseService';
import Identity from '../../models/Identity/Identity';

export default interface AuthenticationService extends BaseService {
  login(identity: Identity): boolean;
  signUp(identity: Identity, user: User): User;
  recoverPassword(identity: Identity): void;
}
