import GeoLocationService from './GeoLocationService';
import AbstractService from '../../utils/services/AbstractService';
import Commandable from '../../../../utils/command/Commandable';
import User from '../user/models/User/User';
import GeoLocation from '../../models/GeoLocation/GeoLocation';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl extends AbstractService implements GeoLocationService, Commandable {
  constructor(isRemote: boolean = false) {
    super(isRemote);
  }
  
  getUserLocation(user: User): GeoLocation {
    throw new Error('Method not implemented.');
  }
}
