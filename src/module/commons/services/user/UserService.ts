import BaseService from '../../utils/services/BaseService';
import User from './models/User/User';
import UserFilter from './models/User/UserFilter';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface UserService extends BaseService {
  getUser(userId: string): User;
  getUsers(userFilter: UserFilter): User[];
  deleteUser(userId: string): User;
  updateUser(updatedUser: User): User;
  createUser(newUser: User): User;
}