import BaseService from "../../../commons/utils/services/BaseService";
import EvertokSpot from "../../models/EvertokSpot/EvertokSpot";
import User from "../../../commons/services/user/models/User/User";
import EvertokSpotMetadata from "../../models/EvertokSpotMetadata/EvertokSpotMetadata";
import SpotFilter from "../../models/EvertokSpot/SpotFilter";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokSpotService extends BaseService {
  create(newSpot: EvertokSpot): Promise<EvertokSpot>;
  addUser(user: User, spot: EvertokSpot): Promise<void>;
  removeUser(user: User, spot: EvertokSpot): Promise<void>;
  archive(spot: EvertokSpot): Promise<void>;
  getMetadata(spot: EvertokSpot, user: User): Promise<EvertokSpotMetadata>;
  getFiles(spot: EvertokSpot): Promise<any>;
  getSpots(spotFilter: SpotFilter): Promise<EvertokSpot[]>;
  getTrendingSpots(): Promise<EvertokSpot[]>;
  getModerators(spot: EvertokSpot): Promise<User[]>;
  updateName(updatedName: string, spot: EvertokSpot): Promise<EvertokSpot>;
  setAnnouncement(announcement: string): Promise<void>;
  setDescription(description: string): Promise<void>;
  setTopic(topic: string): void;
  getUserVisitedSpots(user: User): Promise<EvertokSpot[]>;
  getUserCurrentSpot(user: User): Promise<EvertokSpot>;
}
