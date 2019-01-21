import EvertokUserService from './EvertokUserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import UserFilter from '../../../commons/services/user/models/User/UserFilter';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../../commons/utils/services/AbstractBaseService';
import remote from '../../../../utils/decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokUserServiceImpl extends AbstractBaseService implements EvertokUserService, Commandable {
  @remote
  getCurrentlyConnectedUsers(spot: EvertokSpot): User[] {
    throw new Error('Method not implemented.');
  }

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
  getModuleName(): Modules {
    return Modules.EVERTOK;
  }

  @remote
  getServiceName(): string {
    return 'evertokUserService';
  }
}
