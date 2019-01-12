import BaseModule from "../commons/utils/modules/BaseModule";
import EvertokSpotService from "./services/evertokSpot/EvertokSpotService";
import EvertokUserService from "./services/evertokUser/EvertokUserService";

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface EvertokModule extends BaseModule {
  getSpotService(): EvertokSpotService;
  getUserService(): EvertokUserService;
}
