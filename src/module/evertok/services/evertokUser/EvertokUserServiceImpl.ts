import EvertokUserService from './EvertokUserService';
import AbstractService from '../../../commons/utils/services/AbstractService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import UserFilter from '../../../commons/services/user/models/User/UserFilter';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokUserServiceImpl extends AbstractService implements EvertokUserService {
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
}
