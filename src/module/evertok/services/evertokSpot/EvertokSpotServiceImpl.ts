import EvertokSpotService from './EvertokSpotService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import User from '../../../commons/services/user/models/User/User';
import { mockedData } from './mockedTrendingData';
import Modules from '../../../../utils/modules/Modules';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../commons/utils/services/AbstractBaseService';
import remote from '../../../../utils/decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotServiceImpl extends AbstractBaseService implements EvertokSpotService, Commandable {
  @remote
  async getUserVisitedSpots(userId: String): Promise<EvertokSpot[]> {
    throw new Error('Method not implemented.');
  }

  @remote
  async getUserCurrentSpot(userId: String): Promise<EvertokSpot> {
    throw new Error('Method not implemented.');
  }

  async getTrendingSpots(): Promise<EvertokSpot[]> {
    return await mockedData;
  }

  getModuleName(): Modules {
    return Modules.EVERTOK;
  }

  getServiceName(): string {
    return 'spotService';
  }
}
