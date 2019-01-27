import Service from '../../../commons/utils/services/Service';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotService extends Service {
  getTrendingSpots(): Promise<EvertokSpot[]>;
  getUserVisitedSpots(userId: String): Promise<EvertokSpot[]>;
  getUserCurrentSpot(userId: String): Promise<EvertokSpot>;
}
