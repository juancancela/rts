import AuthenticationService from './AuthenticationService';
import User from '../user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';
import remote from '../../../../utils/decorators/remote';
import Passport from '../../models/Passport/Passport';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthenticationServiceImpl extends AbstractBaseService implements AuthenticationService, Commandable {
  @remote
  login(identity: Passport): boolean {
    throw new Error('Method not implemented.');
  }

  @remote
  signUp(identity: Passport, user: User): User {
    throw new Error('Method not implemented.');
  }

  @remote
  recoverPassword(identity: Passport): void {
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
