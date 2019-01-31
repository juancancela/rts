import UserService from '../../../commons/services/user/UserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';

/**
 * @description Evertok User operations
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokUserService extends UserService {
  getSpotUsers(spotId: string): User[];
  isUserVisitedSpot(userId: string, spotId: string): boolean;
}
