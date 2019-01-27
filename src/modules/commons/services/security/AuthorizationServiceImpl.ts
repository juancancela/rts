import AuthorizationService from './AuthorizationService';
import Commandable from '../../../../utils/command/Commandable';
import Modules from '../../../../utils/modules/Modules';
import AbstractBaseService from '../../utils/services/AbstractBaseService';
import remote from '../../../../utils/decorators/remote';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthorizationServiceImpl extends AbstractBaseService implements AuthorizationService, Commandable {
  @remote
  getModuleName(): Modules {
    return Modules.COMMONS;
  }

  @remote
  getServiceName(): string {
    return 'authorizationService';
  }
}
