import GeoLocationServiceImpl from './GeoLocationServiceImpl';
import remote from '../../utils/decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
@remote
export default class RemoteGeoLocationServiceImpl extends GeoLocationServiceImpl {}
