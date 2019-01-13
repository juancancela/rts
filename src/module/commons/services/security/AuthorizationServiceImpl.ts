import AuthorizationService from './AuthorizationService';
import Commandable from '../../utils/command/Commandable';
import AbstractService from '../../utils/services/AbstractService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthorizationServiceImpl extends AbstractService implements AuthorizationService, Commandable {}
