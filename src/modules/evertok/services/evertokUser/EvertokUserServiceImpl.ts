import EvertokUserService from './EvertokUserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import Passport from '../../../commons/models/Passport/Passport';
import ModuleType from '../../../../utils/module/ModuleType';
import ApplicationError from '../../../../utils/error/ApplicationError';

/**
 * @description Evertok User Service
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokUserServiceImpl extends AbstractBaseService implements EvertokUserService, Commandable {
  @remote
  async getSpotUsers(spotId: string): Promise<User[] | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async isUserVisitedSpot(userId: string, spotId: string): Promise<boolean | ApplicationError> {
    throw new Error('Method not implemented.');
  }

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
    throw new Error('Method not implemented.');
  }

  getModuleName(): ModuleType {
    return ModuleType.EVERTOK;
  }

  getServiceName(): string {
    return 'evertokUserService';
  }
}
