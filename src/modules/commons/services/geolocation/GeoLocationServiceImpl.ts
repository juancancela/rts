import GeoLocationService from './GeoLocationService';
import Commandable from '../../../../utils/command/Commandable';
import GeoLocation from '../../models/GeoLocation/GeoLocation';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import ModuleType from '../../../../utils/constant/ModuleType';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl extends AbstractBaseService implements GeoLocationService, Commandable {
  getUserLocation(userId: string): GeoLocation {
    throw new Error('Method not implemented.');
  }

  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  getServiceName(): string {
    return 'geoLocationService';
  }
}
