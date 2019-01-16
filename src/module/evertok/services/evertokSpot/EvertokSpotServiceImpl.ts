import EvertokSpotService from './EvertokSpotService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import EvertokSpotMetadata from '../../models/EvertokSpotMetadata/EvertokSpotMetadata';
import SpotFilter from '../../models/EvertokSpot/SpotFilter';
import { mockedData } from './mockedTrendingData';
import EvertokSpotImpl from '../../models/EvertokSpot/EvertokSpotImpl';
import Modules from '../../../../utils/modules/Modules';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotServiceImpl implements EvertokSpotService, Commandable {
  private isRemoteExecution: boolean = false;

  constructor(isRemote: boolean = false) {
    this.isRemoteExecution = isRemote;
  }

  getCommand(): Command {
    if (this.isRemote()) return new CommandImpl(true);
    return new CommandImpl(false);
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
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
    if (this && this.isRemote()) {
      const objectResult = await this.getCommand().execute(
        Modules.EVERTOK,
        'spotService',
        'getTrendingSpots',
        'EvertokSpot[]',
        null,
        'http://localhost:8090/remote'
      );
      return objectResult.map((obj: any) => {
        return (obj = EvertokSpotImpl.fromJSON(obj));
      });
    }
    return mockedData;
  }
}
