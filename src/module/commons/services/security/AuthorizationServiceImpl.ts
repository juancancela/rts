import AuthorizationService from './AuthorizationService';
import AbstractService from '../../utils/services/AbstractService';
import Commandable from '../../../../utils/command/Commandable';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthorizationServiceImpl extends AbstractService implements AuthorizationService, Commandable {
  constructor(isRemote: boolean = false) {
    super(isRemote);
  }
}
