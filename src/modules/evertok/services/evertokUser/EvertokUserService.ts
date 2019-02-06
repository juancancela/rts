import UserService from '../../../commons/services/user/UserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import ApplicationError from '../../../../utils/error/ApplicationError';

/**
 * @description Evertok User operations
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokUserService extends UserService {
  getSpotUsers(spotId: string): Promise<User[] | ApplicationError>;
  isUserVisitedSpot(userId: string, spotId: string): Promise<boolean | ApplicationError>;
}
