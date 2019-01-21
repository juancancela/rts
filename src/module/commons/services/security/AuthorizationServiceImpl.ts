import AuthorizationService from './AuthorizationService';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthorizationServiceImpl extends AbstractBaseService implements AuthorizationService, Commandable {
  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  getServiceName(): string {
    return 'authorizationService';
  }
}
