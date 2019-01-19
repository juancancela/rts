import UserService from './UserService';
import User from './models/User/User';
import UserFilter from './models/User/UserFilter';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import Modules from '../../../../utils/modules/Modules';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class UserServiceImpl implements UserService, Commandable {
  private isRemoteExecution: boolean = false;

  constructor(isRemote: boolean = false) {
    this.isRemoteExecution = isRemote;
  }

  getCommand(): Command {
    if (this.isRemote()) return new CommandImpl(true);
    return new CommandImpl(false);
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

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
