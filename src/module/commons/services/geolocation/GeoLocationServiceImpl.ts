import GeoLocationService from './GeoLocationService';
import Commandable from '../../../../utils/command/Commandable';
import User from '../user/models/User/User';
import GeoLocation from '../../models/GeoLocation/GeoLocation';
import Command from '../../../../utils/command/Command';
import CommandImpl from '../../../../utils/command/CommandImpl';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl extends AbstractBaseService implements GeoLocationService, Commandable {
  getUserLocation(user: User): GeoLocation {
    throw new Error('Method not implemented.');
  }

  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'geoLocationService';
  }
}
