import AbstractFactory from '../../../commons/utils/factories/AbstractFactory';
import EvertokModule from '../../EvertokModule';
import EvertokSpotServiceImpl from '../../services/evertokSpot/EvertokSpotServiceImpl';
import EvertokUserServiceImpl from '../../services/evertokUser/EvertokUserServiceImpl';
import EvertokModuleImpl from '../../EvertokModuleImpl';

export default class EvertokModuleFactory implements AbstractFactory<EvertokModule> {
  static create(): EvertokModule {
    const spotService = new EvertokSpotServiceImpl();
    const userService = new EvertokUserServiceImpl();

    return new EvertokModuleImpl(spotService, userService);
  }

  create(): EvertokModule {
    return EvertokModuleFactory.create();
  }

  private constructor() {}
}
