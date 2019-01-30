import EvertokModuleImpl from '../../EvertokModuleImpl';
import EvertokSpotServiceImpl from '../../services/evertokSpot/EvertokSpotServiceImpl';
import EvertokUserServiceImpl from '../../services/evertokUser/EvertokUserServiceImpl';
import AbstractFactory from '../../../../utils/factory/AbstractFactory';
import EvertokModule from '../../EvertokModule';

/**
 * @description Factory used to create instances of Evertok module
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokModuleFactory implements AbstractFactory<EvertokModule> {
  static create(): EvertokModule {
    const evertokSpotService = new EvertokSpotServiceImpl();
    const evertokUserService = new EvertokUserServiceImpl();

    return new EvertokModuleImpl(evertokSpotService, evertokUserService);
  }

  create(): EvertokModule {
    return EvertokModuleFactory.create();
  }

  private constructor() {}
}
