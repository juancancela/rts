import EvertokModule from './EvertokModule';
import EvertokSpotService from './services/evertokSpot/EvertokSpotService';
import EvertokUserService from './services/evertokUser/EvertokUserService';

/**
 * @description Implementation of Evertok module
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class EvertokModuleImpl implements EvertokModule {
  private spotService: EvertokSpotService;
  private userService: EvertokUserService;

  /**
   * @param spotService
   * @param userService
   */
  constructor(spotService: EvertokSpotService, userService: EvertokUserService) {
    this.spotService = spotService;
    this.userService = userService;
  }

  getSpotService(): EvertokSpotService {
    return this.spotService;
  }

  getUserService(): EvertokUserService {
    return this.userService;
  }
}
