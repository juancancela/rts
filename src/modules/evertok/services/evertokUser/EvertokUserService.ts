import UserService from '../../../commons/services/user/UserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';

/**
 * @description Evertok User operations
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokUserService extends UserService {
  getSpotUsers(spot: EvertokSpot): User[];
  isUserVisitedSpot(user: User, spot: EvertokSpot): boolean;
}
