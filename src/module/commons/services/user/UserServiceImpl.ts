import UserService from './UserService';
import User from './models/User/User';
import UserFilter from './models/User/UserFilter';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';
import remote from '../../../../utils/decorators/remote';

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
  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  @remote
  getServiceName(): string {
    return 'userService';
  }
}
