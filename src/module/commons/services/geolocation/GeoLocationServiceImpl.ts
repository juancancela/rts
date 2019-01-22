import GeoLocationService from './GeoLocationService';
import Commandable from '../../../../utils/command/Commandable';
import GeoLocation from '../../models/GeoLocation/GeoLocation';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl extends AbstractBaseService implements GeoLocationService, Commandable {
  getUserLocation(userId: string): GeoLocation {
    throw new Error('Method not implemented.');
  }

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'geoLocationService';
  }
}
