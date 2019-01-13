import ExecutionContext from '../../../commons/utils/constants/ExecutionContext';
import EvertokModuleImpl from '../../EvertokModuleImpl';
import EvertokSpotServiceImpl from '../../services/evertokSpot/EvertokSpotServiceImpl';
import EvertokUserServiceImpl from '../../services/evertokUser/EvertokUserServiceImpl';
import AbstractFactory from '../../../commons/utils/factories/AbstractFactory';
import EvertokModule from '../../EvertokModule';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokModuleFactory implements AbstractFactory<EvertokModule> {
  static create(context: ExecutionContext): EvertokModule {
    const isRemote = context === ExecutionContext.REMOTE ? true : false;
    return new EvertokModuleImpl(new EvertokSpotServiceImpl(isRemote), new EvertokUserServiceImpl(isRemote));
  }

  create(context: ExecutionContext): EvertokModule {
    return EvertokModuleFactory.create(context);
  }

  private constructor() {}
}
