import EvertokSpotService from './EvertokSpotService';
import EvertokSpot from '../../models/EvertokSpot/EvertokSpot';
import { mockedData } from './mockedTrendingData';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import ModuleType from '../../../../utils/module/ModuleType';
import ApplicationError from '../../../../utils/error/ApplicationError';
import ServiceResponse from '../../../../utils/service/ServiceResponse';
import ServiceResponseImpl from '../../../../utils/service/ServiceResponseImpl';

/**
 * @description Evertok Spot Service operations
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokSpotServiceImpl extends AbstractBaseService implements EvertokSpotService, Commandable {
  @remote
  async getUserVisitedSpots(userId: String): Promise<EvertokSpot[] | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async getUserCurrentSpot(userId: String): Promise<EvertokSpot | ApplicationError> {
    throw new Error('Method not implemented.');
  }

  @remote
  async getTrendingSpots(): Promise<ServiceResponse<EvertokSpot[]>> {
    return await new ServiceResponseImpl(mockedData);
  }

  getModuleName(): ModuleType {
    return ModuleType.EVERTOK;
  }

  getServiceName(): string {
    return 'spotService';
  }
}
