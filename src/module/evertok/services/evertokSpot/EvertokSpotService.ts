import Service from '../../../commons/utils/services/Service';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import EvertokSpotMetadata from '../../models/EvertokSpotMetadata/EvertokSpotMetadata';
import SpotFilter from '../../models/EvertokSpot/SpotFilter';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotService extends Service {
  getTrendingSpots(): Promise<EvertokSpot[]>;
  getUserVisitedSpots(user: User): Promise<EvertokSpot[]>;
  getUserCurrentSpot(user: User): Promise<EvertokSpot>;
}
