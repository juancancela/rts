import Service from '../../../../utils/service/Service';
import GeoLocation from '../../models/GeoLocation/GeoLocation';
import User from '../user/models/User/User';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocationService extends Service {
  getUserLocation(userId: string): GeoLocation;
}
