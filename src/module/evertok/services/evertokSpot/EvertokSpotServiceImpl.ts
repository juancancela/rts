import EvertokSpotService from './EvertokSpotService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import SpotFilter from '../../models/EvertokSpot/SpotFilter';
import { mockedData } from './mockedTrendingData';
import Modules from '../../../../utils/modules/Modules';
import Commandable from '../../../../utils/command/Commandable';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import AbstractBaseService from '../../../commons/utils/services/AbstractBaseService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotServiceImpl extends AbstractBaseService implements EvertokSpotService, Commandable {
  private isRemoteExecution: boolean = false;

  constructor(isRemote: boolean = false) {
    super();
    this.isRemoteExecution = isRemote;
  }

  getCommand(): Command {
    if (this.isRemote()) return new CommandImpl(true);
    return new CommandImpl(false);
  }

  isRemote(): boolean {
    return this.isRemoteExecution;
  }

  async getUserVisitedSpots(user: User): Promise<EvertokSpot[]> {
    throw new Error('Method not implemented.');
  }

  async getUserCurrentSpot(user: User): Promise<EvertokSpot> {
    throw new Error('Method not implemented.');
  }

  async getTrendingSpots(): Promise<EvertokSpot[]> {
    console.log('executing getTrendingSpots()');
    return this.isRemote()
      ? await this.execute('getTrendingSpots', null, this.getCommand(), this.getServiceName(), this.getModuleName())
      : mockedData;
  }

  getModuleName(): Modules {
    return Modules.EVERTOK;
  }

  getServiceName(): string {
    return 'spotService';
  }
}
