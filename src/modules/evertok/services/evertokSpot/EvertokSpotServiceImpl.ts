import EvertokSpotService from './EvertokSpotService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import { mockedData } from './mockedTrendingData';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import ModuleType from '../../../../utils/constant/ModuleType';

/**
 * @description Evertok Spot Service operations
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

  @remote
  async getTrendingSpots(): Promise<EvertokSpot[]> {
    return await mockedData;
  }

  getModuleName(): ModuleType {
    return ModuleType.EVERTOK;
  }

  getServiceName(): string {
    return 'spotService';
  }
}