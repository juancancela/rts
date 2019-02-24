import UserService from './UserService';
import User from './models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import Passport from '../../models/Passport/Passport';
import PassportImpl from '../../models/Passport/PassportImpl';
import ProviderType from '../../../../utils/provider/ProviderType';
import ModuleType from '../../../../utils/module/ModuleType';
import ApplicationError from '../../../../utils/error/ApplicationError';

/**
 * @description User Service provides a set of fundamental operations for User.
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class UserServiceImpl extends AbstractBaseService implements UserService, Commandable {
  @remote
  async getUser(userId: string): Promise<User | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async getUsers(): Promise<User[] | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async deleteUser(userId: string): Promise<User | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async updateUser(updatedUser: User): Promise<User | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async createUser(newUser: User): Promise<User | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async getUserPassport(userId: string): Promise<Passport | ApplicationError> {
    try {
      const mockedPassport = new PassportImpl('1', '15560655', 'travel', {}, '1');
      mockedPassport.setKey(ProviderType.ROCKET_CHAT, 'X-Auth-Token', 'bLVW3zLUjzVM0sz7PhqlDtMrQuDYKjy8cXYycg5NcdP');
      mockedPassport.setKey(ProviderType.ROCKET_CHAT, 'X-User-Id', 'onzrkFf5HEDaDJ5or');
      return mockedPassport;
    } catch (error) {
      return error;
    }
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
