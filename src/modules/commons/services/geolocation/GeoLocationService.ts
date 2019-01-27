import Service from '../../../../utils/service/Service';
import GeoLocation from '../../models/GeoLocation/GeoLocation';

/**
 * @description contract that specifies operations of a geolocation service
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default interface GeoLocationService extends Service {
  /**
   * @param userId id of the user to be located
   * @returns the @GeoLocation of a @User
   */
  getUserLocation(userId: string): GeoLocation;
}
