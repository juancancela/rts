import EvertokUserService from './EvertokUserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import UserFilter from '../../../commons/services/user/models/User/UserFilter';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../../commons/utils/services/AbstractBaseService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokUserServiceImpl extends AbstractBaseService implements EvertokUserService, Commandable {
  getCurrentlyConnectedUsers(spot: EvertokSpot): User[] {
    throw new Error('Method not implemented.');
  }

  getSpotUsers(spot: EvertokSpot): User[] {
    throw new Error('Method not implemented.');
  }

  isUserVisitedSpot(user: User, spot: EvertokSpot): boolean {
    throw new Error('Method not implemented.');
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
    return Modules.EVERTOK;
  }

  getServiceName(): string {
    return 'evertokUserService';
  }
}
