import BaseService from '../../utils/services/BaseService';
import GeoLocation from '../../models/GeoLocation/GeoLocation';
import User from '../user/models/User/User';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocationService extends BaseService {
    getUserLocation(user: User): GeoLocation;
}
