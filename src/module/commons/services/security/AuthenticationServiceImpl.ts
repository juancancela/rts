import AuthenticationService from './AuthenticationService';
import Identity from '../../models/Identity/Identity';
import User from '../user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';
import remote from '../../../../utils/decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthenticationServiceImpl extends AbstractBaseService implements AuthenticationService, Commandable {
  @remote
  login(identity: Identity): boolean {
    throw new Error('Method not implemented.');
  }

  @remote
  signUp(identity: Identity, user: User): User {
    throw new Error('Method not implemented.');
  }

  @remote
  recoverPassword(identity: Identity): void {
    throw new Error('Method not implemented.');
  }

  @remote
  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  @remote
  getServiceName(): string {
    return 'authenticationService';
  }
}
