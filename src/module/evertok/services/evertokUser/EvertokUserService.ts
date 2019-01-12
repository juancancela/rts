import UserService from '../../../commons/services/user/UserService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';

export default interface EvertokUserService extends UserService {
  getCurrentlyConnectedUsers(spot: EvertokSpot): User[];
  getSpotUsers(spot: EvertokSpot): User[];
  isUserVisitedSpot(user: User, spot: EvertokSpot): boolean;
}