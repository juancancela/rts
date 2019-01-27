import UserService from './UserService';
import User from './models/User/User';
import UserFilter from './models/User/UserFilter';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import Passport from '../../models/Passport/Passport';
import PassportImpl from '../../models/Passport/PassportImpl';
import ProviderType from '../../../../utils/constant/ProviderType';
import ModuleType from '../../../../utils/constant/ModuleType';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class UserServiceImpl extends AbstractBaseService implements UserService, Commandable {
  @remote
  getUser(userId: string): User {
    throw new Error('Method not implemented.');
  }

  @remote
  getUsers(userFilter: UserFilter): User[] {
    throw new Error('Method not implemented.');
  }

  @remote
  deleteUser(userId: string): User {
    throw new Error('Method not implemented.');
  }

  @remote
  updateUser(updatedUser: User): User {
    throw new Error('Method not implemented.');
  }

  @remote
  createUser(newUser: User): User {
    throw new Error('Method not implemented.');
  }

  @remote
  getUserPassport(userId: string): Passport {
    const mockedPassport = new PassportImpl('1', '15560655', 'travel', {}, '1');
    mockedPassport.setKey(ProviderType.ROCKET_CHAT, 'X-Auth-Token', '9YSiSLGtxV7XOPsFDxZmcN7eurrho2SWjmedhGWJ4nz');
    mockedPassport.setKey(ProviderType.ROCKET_CHAT, 'X-User-Id', 'WzuLnwgsMmPq3CrwJ');

    return mockedPassport;
  }

  @remote
  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  @remote
  getServiceName(): string {
    return 'userService';
  }
}
