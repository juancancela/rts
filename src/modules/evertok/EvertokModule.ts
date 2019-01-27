import AbstractBaseModule from '../commons/utils/modules/AbstractBaseModule';
import EvertokSpotService from './services/evertokSpot/EvertokSpotService';
import EvertokUserService from './services/evertokUser/EvertokUserService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokModule extends AbstractBaseModule {
  getSpotService(): EvertokSpotService;
  getUserService(): EvertokUserService;
}
