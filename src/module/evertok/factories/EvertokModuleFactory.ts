import ExecutionContext from '../../commons/utils/constants/ExecutionContext';
import EvertokModuleImpl from '../EvertokModuleImpl';
import EvertokSpotServiceImpl from '../services/evertokSpot/EvertokSpotServiceImpl';
import EvertokUserServiceImpl from '../services/evertokUser/EvertokUserServiceImpl';
import AbstractFactory from '../../commons/utils/factories/AbstractFactory';
import EvertokModule from '../EvertokModule';
import RemoteEvertokSpotServiceImpl from '../services/evertokSpot/RemoteEvertokSpotServiceImpl';
import RemoteEvertokUserServiceImpl from '../services/evertokUser/RemoteEvertokUserServiceImpl';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokModuleFactory implements AbstractFactory<EvertokModule> {
  static create(context: ExecutionContext): EvertokModule {
    switch (context) {
      case ExecutionContext.LOCAL:
        return new EvertokModuleImpl(new EvertokSpotServiceImpl(), new EvertokUserServiceImpl());

      case ExecutionContext.REMOTE:
        return new EvertokModuleImpl(new RemoteEvertokSpotServiceImpl(), new RemoteEvertokUserServiceImpl());
    }
  }

  create(context: ExecutionContext): EvertokModule {
    return EvertokModuleFactory.create(context);
  }

  private constructor() {}
}
