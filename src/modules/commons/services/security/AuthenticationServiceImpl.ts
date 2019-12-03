import AuthenticationService from './AuthenticationService';
import User from '../user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import Passport from '../../models/Passport/Passport';
import ModuleType from '../../../../utils/module/ModuleType';
import ApplicationError from '../../../../utils/error/ApplicationError';

/**
 * Service that provides authentication operations for @User
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthenticationServiceImpl extends AbstractBaseService
  implements AuthenticationService, Commandable {
  @remote
  async login(identity: Passport): Promise<boolean | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async signUp(identity: Passport, user: User): Promise<User | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async recoverPassword(identity: Passport): Promise<void | ApplicationError> {
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
