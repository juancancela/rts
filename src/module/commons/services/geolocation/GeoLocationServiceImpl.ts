import GeoLocationService from './GeoLocationService';
import Commandable from '../../utils/command/Commandable';
import AbstractService from '../../utils/services/AbstractService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class GeoLocationServiceImpl extends AbstractService implements GeoLocationService, Commandable {}
