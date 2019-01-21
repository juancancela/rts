import UserService from './UserService';
import User from './models/User/User';
import UserFilter from './models/User/UserFilter';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class UserServiceImpl extends AbstractBaseService implements UserService, Commandable {
  getUser(userId: string): User {
    throw new Error('Method not implemented.');
  }

  getUsers(userFilter: UserFilter): User[] {
    throw new Error('Method not implemented.');
  }

  deleteUser(userId: string): User {
    throw new Error('Method not implemented.');
  }

  updateUser(updatedUser: User): User {
    throw new Error('Method not implemented.');
  }

  createUser(newUser: User): User {
    throw new Error('Method not implemented.');
  }

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'userService';
  }
}
