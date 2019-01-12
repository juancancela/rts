import EvertokSpotService from './EvertokSpotService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import EvertokSpotMetadata from '../../models/EvertokSpotMetadata/EvertokSpotMetadata';
import SpotFilter from '../../models/EvertokSpot/SpotFilter';
import Commandable from '../../../commons/utils/command/Commandable';
import Command from '../../../commons/utils/command/Command';
import RemoteCommandImpl from '../../../commons/utils/command/RemoteCommandImpl';
import CommandImpl from '../../../commons/utils/command/CommandImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotServiceImpl implements EvertokSpotService, Commandable {
  private isRemoteExecution: boolean = false;
  private remoteCommand: Command = new RemoteCommandImpl();
  private command: Command = new CommandImpl();

  getCommand(): Command {
    if (this.isRemote()) return this.remoteCommand;
    return this.command;
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  async getTrendingSpots(): Promise<EvertokSpot[]> {
    throw new Error('Method not implemented.');
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
}
