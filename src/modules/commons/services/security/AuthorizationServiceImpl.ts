import AuthorizationService from './AuthorizationService';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import ModuleType from '../../../../utils/constant/ModuleType';

/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthorizationServiceImpl extends AbstractBaseService implements AuthorizationService, Commandable {
  @remote
  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  @remote
  getServiceName(): string {
    return 'authorizationService';
  }
}
