import BaseService from "../../../commons/models/BaseService/BaseService";
import EvertokSpot from "../../models/EvertokSpot/EvertokSpot";
import User from "../../../commons/services/user/models/User/User";
import EvertokSpotMetadata from "../../models/EvertokSpotMetadata/EvertokSpotMetadata";
import SpotFilter from "../../models/EvertokSpot/SpotFilter";

export default interface EvertokSpotService extends BaseService {
  create(newSpot: EvertokSpot): EvertokSpot;
  addUser(user: User, spot: EvertokSpot): void;
  removeUser(user: User, spot: EvertokSpot): void;
  archive(spot: EvertokSpot): void;
  getMetadata(spot: EvertokSpot, user: User): EvertokSpotMetadata;
  getFiles(spot: EvertokSpot): any;
  getSpots(spotFilter: SpotFilter): EvertokSpot[];
  getModerators(spot: EvertokSpot): User[];
  updateName(updatedName: string, spot: EvertokSpot): EvertokSpot;
  setAnnouncement(announcement: string): void;
  setDescription(description: string): void;
  setTopic(topic: string): void;
  getUserVisitedSpots(user: User): EvertokSpot[];
  getUserCurrentSpot(user: User): EvertokSpot;
}
