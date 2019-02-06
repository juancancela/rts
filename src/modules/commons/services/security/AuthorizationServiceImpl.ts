import AuthorizationService from './AuthorizationService';
import Commandable from '../../../../utils/command/Commandable';
import AbstractBaseService from '../../../../utils/service/AbstractBaseService';
import remote from '../../../../utils/command/remote';
import ModuleType from '../../../../utils/module/ModuleType';

/**
 * Service that provides authorization operations for @User
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
export default class AuthorizationServiceImpl extends AbstractBaseService implements AuthorizationService, Commandable {
  getModuleName(): ModuleType {
    return ModuleType.COMMONS;
  }

  getServiceName(): string {
    return 'authorizationService';
  }
}
