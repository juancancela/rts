import UserService from './UserService';
import AbstractService from '../../utils/services/AbstractService';
import User from './models/User/User';
import UserFilter from './models/User/UserFilter';
import Commandable from '../../utils/command/Commandable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class UserServiceImpl extends AbstractService implements UserService, Commandable {
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
}
