import Service from '../../../../utils/service/Service';
import User from './models/User/User';
import UserFilter from './models/User/UserFilter';
import Passport from '../../models/Passport/Passport';

/**
 * @description User Service provides a set of fundamental operations for User.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface UserService extends Service {
  /**
   * @param userId id of the user to be retrieved
   * @returns an User instance
   */
  getUser(userId: string): User;

  /**
   * @param userFilter
   */
  getUsers(userFilter: UserFilter): User[];

  /**
   * @param userId
   */
  deleteUser(userId: string): User;

  /**
   * @param updatedUser
   */
  updateUser(updatedUser: User): User;

  /**
   * @param newUser
   */
  createUser(newUser: User): User;

  /**
   * @param userId
   */
  getUserPassport(userId: string): Passport;
}
