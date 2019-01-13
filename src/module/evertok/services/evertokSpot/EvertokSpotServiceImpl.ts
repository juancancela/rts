import EvertokSpotService from './EvertokSpotService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import EvertokSpotMetadata from '../../models/EvertokSpotMetadata/EvertokSpotMetadata';
import SpotFilter from '../../models/EvertokSpot/SpotFilter';
import AbstractService from '../../../commons/utils/services/AbstractService';
import { mockedData } from './mockedTrendingData';
import EvertokSpotImpl from '../../models/EvertokSpot/EvertokSpotImpl';
import ModuleType from '../../../../utils/modules/ModuleType';
import Commandable from '../../../../utils/command/Commandable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotServiceImpl extends AbstractService implements EvertokSpotService, Commandable {
  constructor(isRemote: boolean = false) {
    super(isRemote);
  }

  async create(newSpot: EvertokSpot): Promise<EvertokSpot> {
    throw new Error('Method not implemented.');
  }

  async addUser(user: User, spot: EvertokSpot): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async removeUser(user: User, spot: EvertokSpot): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async archive(spot: EvertokSpot): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async getMetadata(spot: EvertokSpot, user: User): Promise<EvertokSpotMetadata> {
    throw new Error('Method not implemented.');
  }

  async getFiles(spot: EvertokSpot) {
    throw new Error('Method not implemented.');
  }

  async getSpots(spotFilter: SpotFilter): Promise<EvertokSpot[]> {
    throw new Error('Method not implemented.');
  }

  async getModerators(spot: EvertokSpot): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  async updateName(updatedName: string, spot: EvertokSpot): Promise<EvertokSpot> {
    throw new Error('Method not implemented.');
  }

  async setAnnouncement(announcement: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async setDescription(description: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async setTopic(topic: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async getUserVisitedSpots(user: User): Promise<EvertokSpot[]> {
    throw new Error('Method not implemented.');
  }

  async getUserCurrentSpot(user: User): Promise<EvertokSpot> {
    throw new Error('Method not implemented.');
  }

  async getTrendingSpots(): Promise<EvertokSpot[]> {
    if (this.isRemote()) {
      const objectResult = await this.getCommand().execute(
        ModuleType.EVERTOK,
        'getTrendingSpots',
        'EvertokSpot[]',
        'EvertokSpotService',
        null
      );
      return objectResult.map((obj: any) => {
        return (obj = EvertokSpotImpl.fromJSON(obj));
      });
    }
    return mockedData;
  }
}
