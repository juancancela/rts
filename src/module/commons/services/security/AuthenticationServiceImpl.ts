import AuthenticationService from './AuthenticationService';
import AbstractService from '../../utils/services/AbstractService';
import Identity from '../../models/Identity/Identity';
import User from '../user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthenticationServiceImpl extends AbstractService implements AuthenticationService, Commandable {
  constructor(isRemote: boolean = false) {
    super(isRemote);
  }
  
  login(identity: Identity): boolean {
    throw new Error('Method not implemented.');
  }
  signUp(identity: Identity, user: User): User {
    throw new Error('Method not implemented.');
  }
  recoverPassword(identity: Identity): void {
    throw new Error('Method not implemented.');
  }
}
