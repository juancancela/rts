import Service from '../../../../utils/service/Service';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';

/**
 * @description Evertok Spot Service operations
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotService extends Service {
  /**
   * @returns list of trending Evertok Spots
   */
  getTrendingSpots(): Promise<EvertokSpot[]>;

  /**
   * @returns List of Evertok Spots visited by @User
   * @param userId id of the user
   */
  getUserVisitedSpots(userId: String): Promise<EvertokSpot[]>;

  /**
   * @returns Evertok Spot currently visited by @User
   * @param userId id of the user
   */
  getUserCurrentSpot(userId: String): Promise<EvertokSpot>;
}
