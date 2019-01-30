import EvertokUserService from './EvertokUserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import UserFilter from '../../../commons/services/user/models/User/UserFilter';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import Passport from '../../../commons/models/Passport/Passport';
import ModuleType from '../../../../utils/constant/ModuleType';

/**
 * @description Evertok User Service
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokUserServiceImpl extends AbstractBaseService implements EvertokUserService, Commandable {
  @remote
  getSpotUsers(spot: EvertokSpot): User[] {
    throw new Error('Method not implemented.');
  }

  @remote
  isUserVisitedSpot(user: User, spot: EvertokSpot): boolean {
    throw new Error('Method not implemented.');
  }

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
    throw new Error('Method not implemented.');
  }

  getModuleName(): ModuleType {
    return ModuleType.EVERTOK;
  }

  getServiceName(): string {
    return 'evertokUserService';
  }
}