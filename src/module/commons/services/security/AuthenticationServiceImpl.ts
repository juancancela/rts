import AuthenticationService from './AuthenticationService';
import Identity from '../../models/Identity/Identity';
import User from '../user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthenticationServiceImpl extends AbstractBaseService implements AuthenticationService, Commandable {
  login(identity: Identity): boolean {
    throw new Error('Method not implemented.');
  }
  signUp(identity: Identity, user: User): User {
    throw new Error('Method not implemented.');
  }
  recoverPassword(identity: Identity): void {
    throw new Error('Method not implemented.');
  }

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'authenticationService';
  }
}
