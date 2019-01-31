import GeoLocationService from './GeoLocationService';
import Commandable from '../../../../utils/command/Commandable';
import GeoLocation from '../../models/GeoLocation/GeoLocation';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import ModuleType from '../../../../utils/module/ModuleType';

/**
 * @description contract that specifies operations of a geolocation service
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl extends AbstractBaseService implements GeoLocationService, Commandable {
  /**
   * @param userId id of the user to be located
   * @returns the @GeoLocation of a @User
   */
  getUserLocation(userId: string): GeoLocation {
    throw new Error('Method not implemented.');
  }

  /**
   * @returns name of the module to which this service belongs to
   */
  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  /**
   * @returns name of the service to which this service belongs to
   */
  getServiceName(): string {
    return 'geoLocationService';
  }
}
