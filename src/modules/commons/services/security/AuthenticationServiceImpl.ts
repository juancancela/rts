import AuthenticationService from './AuthenticationService';
import User from '../user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import Passport from '../../models/Passport/Passport';
import ModuleType from '../../../../utils/constant/ModuleType';

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
  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  @remote
  getServiceName(): string {
    return 'authenticationService';
  }
}
