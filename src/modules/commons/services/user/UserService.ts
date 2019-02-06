import Service from '../../../../utils/service/Service';
import User from './models/User/User';
import Passport from '../../models/Passport/Passport';
import ApplicationError from '../../../../utils/error/ApplicationError';

/**
 * @description User Service provides a set of fundamental operations for User.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface UserService extends Service {
  /**
   * @param userId id of the user to be retrieved
   * @returns an User instance
   */
  getUser(userId: string): Promise<User | ApplicationError>;

  /**
   * @param userFilter
   */
  getUsers(): Promise<User[] | ApplicationError>;

  /**
   * @param userId
   */
  deleteUser(userId: string): Promise<User | ApplicationError>;

  /**
   * @param updatedUser
   */
  updateUser(updatedUser: User): Promise<User | ApplicationError>;

  /**
   * @param newUser
   */
  createUser(newUser: User): Promise<User | ApplicationError>;

  /**
   * @param userId
   */
  getUserPassport(userId: string): Promise<Passport | ApplicationError>;
}
